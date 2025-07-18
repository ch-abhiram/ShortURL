const { getUser } = require("../service/auth.js");

async function restrictToLoggedinUserOnly(req, res, next) {
    try {
        const userUid = req.cookies?.uid;
        if (!userUid) return res.redirect("/login");

        const user = getUser(userUid); 

        if (!user) return res.redirect("/login");

        req.user = user;
        next();
    } catch (err) {
        console.error("Auth middleware error:", err);
        
        return res.redirect("/login"); 
    }
}

async function checkAuth(req, res, next) {
    try {
        const userUid = req.cookies?.uid;
        const user = getUser(userUid);
        req.user = user;
        next();
    } catch (err) {
        console.error("Auth middleware error:", err);
        req.user = null;
        next();
    }
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
}
