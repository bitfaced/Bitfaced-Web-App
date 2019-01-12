const Parser = require('rss-parser');

const parser = new Parser();

const rssToJson = () => parser.parseURL('https://feed.pippa.io/public/shows/bitfaced').then((feed) => {
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
