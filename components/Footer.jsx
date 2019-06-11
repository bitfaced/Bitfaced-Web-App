import React from 'react';
import { Pane } from 'evergreen-ui';
import { PropTypes } from 'prop-types';
import PodcastContainer from './PodcastContainer';

const Footer = ({ episodes }) => (
  <Pane background="tint2" position="absolute" bottom="-4px" width="100%">
    <PodcastContainer episodes={episodes} />
  </Pane>
);

Footer.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })).isRequired,
};

export default Footer;
