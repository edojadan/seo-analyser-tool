const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const axios = require('axios');

async function analyseSEO(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 0 });
    const content = await page.content();
    await browser.close();

    const $ = cheerio.load(content);
    
    // Extract word count
    const text = $('body').text().replace(/\s+/g, ' ').trim();
    const wordCount = text.split(' ').length;
    
    // Extract keyword density (basic example)
    const words = text.toLowerCase().split(/\W+/);
    const keywordFrequency = words.reduce((acc, word) => {
        if (word.length > 3) {
            acc[word] = (acc[word] || 0) + 1;
        }
        return acc;
    }, {});
    
    // Extract canonical URL
    const canonical = $('link[rel="canonical"]').attr('href') || 'No canonical URL';
    
    // Extract missing meta tags
    const missingMetaTags = [];
    ['description', 'keywords', 'author'].forEach(tag => {
        if (!$(`meta[name='${tag}']`).attr('content')) {
            missingMetaTags.push(tag);
        }
    });
    
    // Find broken links
    const links = $('a[href]');
    const brokenLinks = [];
    
    for (let i = 0; i < links.length; i++) {
        const link = $(links[i]).attr('href');
        if (link.startsWith('http')) {
            try {
                const response = await axios.head(link);
                if (response.status >= 400) {
                    brokenLinks.push(link);
                }
            } catch (error) {
                brokenLinks.push(link);
            }
        }
    }
    
    return {
        title: $('title').text(),
        description: $('meta[name="description"]').attr('content') || 'No description',
        canonical,
        missingMetaTags,
        headings: {
            h1: $('h1').length,
            h2: $('h2').length,
            h3: $('h3').length
        },
        imagesWithoutAlt: $('img:not([alt])').length,
        wordCount,
        keywordDensity: Object.entries(keywordFrequency).sort((a, b) => b[1] - a[1]).slice(0, 10),
        brokenLinks
    };
}

module.exports = { analyseSEO };