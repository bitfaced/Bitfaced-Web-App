const Parser = require('rss-parser');

const parser = new Parser();


async function rssToJson() {
  const feed = await parser.parseURL(`https://feeds.transistor.fm/bitfaced`);
  return feed;
}

module.exports = rssToJson;
