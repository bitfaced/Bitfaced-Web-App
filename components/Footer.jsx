import React from 'react';

const footerStyle = {
  position: 'absolute',
  bottom: '-4px',
  width: '100%',
};

const PIPPA_EMBED_URL = 'https://player.pippa.io/bitfaced?theme=default&cover=1&latest=1';

const Footer = () => (
  <div style={footerStyle}>
    <iframe
      title="Bitfaced Podcast Media Player"
      src={PIPPA_EMBED_URL}
      frameBorder="0"
      width="100%"
      height="218px"
      allow="autoplay"
    />
  </div>
);

export default Footer;
