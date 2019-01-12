const pacmanHighScoreurl = 'http://ec2-18-220-163-76.us-east-2.compute.amazonaws.com/data/db-handler.php?timestamp=1547274112244&action=get';

const getContent = url => new Promise((resolve, reject) => {
  // select http or https module, depending on reqested url
  // eslint-disable-next-line global-require
  const lib = url.startsWith('https') ? require('https') : require('http');
  const request = lib.get(url, (response) => {
    // handle http errors
    if (response.statusCode < 200 || response.statusCode > 299) {
      reject(new Error(`Failed to load page, status code: ${response.statusCode}`));
    }
    // temporary data holder
    const body = [];
    // on every content chunk, push it to the data array
    response.on('data', chunk => body.push(chunk));
    // we are done, resolve promise with those joined chunks
    response.on('end', () => resolve(body.join('')));
  });
    // handle connection errors of the request
  request.on('error', err => reject(err));
});

const getHighScore = () => {
  console.log('getting high score');
  return getContent(pacmanHighScoreurl);
};

module.exports = getHighScore;
