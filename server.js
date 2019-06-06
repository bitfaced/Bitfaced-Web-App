const express = require('express');
const next = require('next');
const compression = require('compression');

const getRssData = require('./server/api/bfRssToJson');
const getHighScoreData = require('./server/api/getHighScores');

const dev = process.env.NODE_ENV !== 'production';
const port = dev ? 3000 : 80;
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare()
  .then(() => {
    const server = express();

    server.use(compression());
    server.disable('x-powered-by');

    // GET method route
    server.get('/api/podcast/latest', (req, res) => {
      getRssData().then((data) => {
        const { title, content } = data.items[0];
        const latestFeedItem = { title, content };
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(latestFeedItem));
      });
    });

    server.get('/api/podcast/list', (req, res) => {
      getRssData().then((data) => {
        const podcasts = (data.items || []).map(item => ({ title: item.title, link: item.link }));
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(podcasts));
      });
    });

    server.get('/api/pacman/highscore', (req, res) => {
      getHighScoreData().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      });
    });

    server.get('*', (req, res) => {
      res.setHeader('bitfaced-key', '11-11-89');
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
