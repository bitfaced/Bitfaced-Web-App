import React from 'react';

// rss feed has share links instead of embed links.
function swapUrlFromShareToEmbed(url) {
  return url.replace('/s/', '/e/');
}

const PodcastPlayer = embedUrl => (
  <div>
    <iframe
      title="Bitfaced Podcast Media Player"
      src={swapUrlFromShareToEmbed(embedUrl.embedUrl)}
      frameBorder="0"
      width="100%"
      height="220px"
      allow="autoplay"
    />
  </div>
);

export default PodcastPlayer;
