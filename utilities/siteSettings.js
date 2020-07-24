const isLocal = process.env.NODE_ENV !== 'production';

const settings = {
  DEFAULT_CONTENT: 'home',
  URL_PACMAN_HIGHSCORE: isLocal ? 'http://localhost:3000/api/pacman/highscore' : 'http://ec2-3-22-170-244.us-east-2.compute.amazonaws.com/api/pacman/highscore',
  URL_PODCAST_LATEST: isLocal ? 'http://localhost:3000/api/podcast/latest' : 'http://ec2-3-22-170-244.us-east-2.compute.amazonaws.com/api/podcast/latest',
  URL_PODCAST_LIST: isLocal ? 'http://localhost:3000/api/podcast/list' : 'http://ec2-3-22-170-244.us-east-2.compute.amazonaws.com/api/podcast/list',
};

export default settings;
