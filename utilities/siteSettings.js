const isLocal = process.env.NODE_ENV !== 'production';

const settings = {
  DEFAULT_CONTENT: 'home',
  URL_PACMAN_HIGHSCORE: isLocal ? 'http://localhost:3000/api/pacman/highscore' : 'https://bitfaced.com/api/pacman/highscore',
  URL_PODCAST_LATEST: isLocal ? 'http://localhost:3000/api/podcast/latest' : 'https://bitfaced.com/api/podcast/latest',
  URL_PODCAST_LIST: isLocal ? 'http://localhost:3000/api/podcast/list' : 'https://bitfaced.com/api/podcast/list',
};

export default settings;
