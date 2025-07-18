const { v4: uuidv4 } = require("uuid");
const User = require('../models/user.js');
const { setUser } = require('../service/auth.js');
const bcrypt = require('bcryptjs');

async function handleUserSignup(req, res) {
    try {
        const { name, email, password } = req.body;

        
        const exists = await User.findOne({ email });
        if (exists) {
            return res.render("signup", { error: "Email already registered" });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPassword,
        });
        return res.redirect("/");
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

async function handleUserLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.render("login", { error: "Invalid email or password" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render("login", { error: "Invalid email or password" });
        }
        const sessionId = uuidv4();
        setUser(sessionId, user);
        
        res.cookie("uid", sessionId, { httpOnly: true });
        return res.redirect("/");
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}
