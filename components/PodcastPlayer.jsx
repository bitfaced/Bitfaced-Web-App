import React from 'react';
import { PropTypes } from 'prop-types';

// rss feed has share links instead of embed links.
function swapUrlFromShareToEmbed(url) {
  return url.replace('/s/', '/e/');
}

const PodcastPlayer = ({ embedUrl }) => (
  <div>
    <iframe
      title="Bitfaced Podcast Media Player"
      src={swapUrlFromShareToEmbed(embedUrl)}
      frameBorder="0"
      width="100%"
      height="180px"
      allow="autoplay"
    />
  </div>
);

PodcastPlayer.propTypes = {
  embedUrl: PropTypes.string.isRequired,
};
export default PodcastPlayer;
