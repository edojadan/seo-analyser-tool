const { analyseSEO } = require('../src/analyser');
const assert = require('assert');

describe('SEO Analyser', function() {
    it('should fetch title and metadata from a sample page', async function() {
        const result = await analyseSEO('https://example.com');
        assert.ok(result.title.length > 0);
    });
});