import React from 'react';
import { Pane } from 'evergreen-ui';
import PodcastContainer from './PodcastContainer';

const Footer = episodes => (
  <Pane background="tint2" position="absolute" bottom="-4px" width="100%">
    <PodcastContainer episodes={episodes.episodes} />
  </Pane>
);

export default Footer;
