const express = require("express");
const path = require('path');
const urlRoute = require('./routes/url');
const cookieParser = require('cookie-parser');
const {connectToMongoDB} = require("./db/db.js");
require('dotenv').config();

const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth.js");

const app = express();
const PORT = process.env.PORT;


const URL = require("./models/url.js");
const staticRoute = require("./routes/staticRouter.js");
const userRoute = require("./routes/user.js");

app.set('view engine', "ejs");
app.set('views',path.resolve("./views"));
connectToMongoDB()
  .then(() => console.log('mongodb connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // to stop the app if DB connection fails
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());



app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/",checkAuth, staticRoute);


app.get("/:shortId", async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } }
        );
        if (!entry) return res.status(404).render("error", { message: "Short URL not found" });
        res.redirect(entry.redirectURL);
    } catch (err) {
        console.error("Error in redirect:", err);
        res.status(500).render("error", { message: "Something went wrong!" });
    }
});

app.use((req, res) => {
    res.status(404).render("error", { message: "Page not found" });
});


app.listen(PORT, ()=> console.log(`Server Started at Port ${PORT}`));///