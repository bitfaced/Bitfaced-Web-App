const express = require('express');
const next = require('next');
const compression = require('compression');

const getRssData = require('./server/api/bfRssToJson');
const getHighScoreData = require('./server/api/getHighScores');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.NODE_ENV !== 'production' ? 3000 : 80;
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare()
  .then(() => {
    const server = express();

    server.use(compression());

    // GET method route
    server.get('/api/podcast/latest', (req, res) => {
      getRssData().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
      });
    });

    server.get('/api/pacman/highscore', (req, res) => {
      getHighScoreData().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
