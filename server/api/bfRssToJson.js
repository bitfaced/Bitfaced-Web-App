const Parser = require('rss-parser');

const parser = new Parser();
const date = new Date();

async function rssToJson() {
  const feed = await parser.parseURL(`https://feeds.transistor.fm/bitfaced?t=${date}`);
  return feed;
}

module.exports = rssToJson;
