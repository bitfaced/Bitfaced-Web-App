const Parser = require('rss-parser');

const parser = new Parser();
const date = new Date();

const rssToJson = () => parser.parseURL(`https://feeds.transistor.fm/bitfaced?t=${date}`).then((feed) => {
  const {
    title,
    content,
  } = feed.items[0];

  return {
    title,
    content,
  };
});

module.exports = rssToJson;
