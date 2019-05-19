const Parser = require('rss-parser');

const parser = new Parser();
const date = new Date();

const rssToJson = () => parser.parseURL(`https://feeds.transistor.fm/bitfaced?t=${date}`).then((feed) => {
  return feed;
});

module.exports = rssToJson;
