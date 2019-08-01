import React from 'react';
import { Pane } from 'evergreen-ui';
import { PropTypes } from 'prop-types';
import PodcastContainer from './PodcastContainer';

const Footer = ({ episodes, listHeight, togglePlayList }) => (
  <Pane background="tint2" position="absolute" bottom="0px" width="100%">
    <PodcastContainer
      episodes={episodes}
      listHeight={listHeight}
      togglePlayList={togglePlayList}
    />
  </Pane>
);

Footer.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })).isRequired,
  listHeight: PropTypes.number.isRequired,
  togglePlayList: PropTypes.func.isRequired,
};

export default Footer;
