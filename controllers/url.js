const shortId = require("shortid");
const URL = require("../models/url.js");

async function handlegenerateNewShortURL(req, res) {
    try {
        const body = req.body;

        
        if (!body.url) {
            return res.status(400).json({ error: 'url is required' });
        }

        
        const shortID = shortId();

        
        await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            visitHistory: [],
            createdBy: req.user ? req.user._id : null,
        });

        
        const baseUrl = req.protocol + "://" + req.get("host");

        
        return res.render("home", {
            id: shortID,
            baseUrl: baseUrl
        });
    } catch (error) {
        console.error("Error generating short URL:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

async function handleGetAnalytics(req, res) {
    try {
        const shortId = req.params.shortId;
        const result = await URL.findOne({ shortId });
        if (!result) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        return res.json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory,
        });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    handlegenerateNewShortURL,
    handleGetAnalytics,
};
