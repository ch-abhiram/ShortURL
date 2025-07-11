const express = require("express");
const path = require('path');
const urlRoute = require('./routes/url');
const cookieParser = require('cookie-parser');
const {connectToMongoDB} = require("./connect.js");

const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth.js");

const app = express();
const PORT = 8001;


const URL = require("./models/url.js");
const staticRoute = require("./routes/staticRouter.js");
const userRoute = require("./routes/user.js");

app.set('view engine', "ejs");
app.set('views',path.resolve("./views"));
connectToMongoDB('mongodb://localhost:27017/short-url').then(()=> console.log('mongodb connected')
)
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());



app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/",checkAuth, staticRoute);


app.get("/:shortId", async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
})
app.listen(PORT, ()=> console.log(`Server Started at Port ${PORT}`));