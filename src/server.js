const express = require('express');
const { analyseSEO } = require('./analyser');
const { checkPageSpeed } = require('./speedChecker');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/analyse', async (req, res) => {
    const { url } = req.query;
    if (!url) return res.status(400).json({ error: 'URL is required' });
    try {
        const seoReport = await analyseSEO(url);
        res.json(seoReport);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/speed', (req, res) => {
    const { url } = req.query;
    if (!url) return res.status(400).json({ error: 'URL is required' });
    checkPageSpeed(url, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({ pageSpeed: result });
        }
    });
});

app.listen(PORT, () => {
    console.log(`SEO Analyser running on http://localhost:${PORT}`);
});