import React from 'react';
import PodcastContainer from './PodcastContainer';

const footerStyle = {
  position: 'absolute',
  bottom: '-4px',
  width: '100%',
};

const Footer = episodes => (
  <div style={footerStyle}>
    <PodcastContainer episodes={episodes.episodes} />
  </div>
);

export default Footer;
