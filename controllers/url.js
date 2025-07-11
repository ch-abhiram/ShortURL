const shortId = require("shortid");
const URL = require("../models/url.js");

async function handlegenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'url is required' });
    const shortID = shortId();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });
    return res.render("home",{
        id: shortID,
    })
    
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;

    const result = await URL.findOne({ shortId });

    // if (!result) {
    //     return res.status(404).json({ error: "Short URL not found" });
    // }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
    handlegenerateNewShortURL,
    handleGetAnalytics,
};