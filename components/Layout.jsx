import React from 'react';
import { PropTypes } from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Toast from './Toast';

const layoutStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  height: '100%',
  width: '100%',
};

const Layout = ({
  onContentChange,
  children,
  latestPodcast,
  episodes,
  lastPlayedEpisode,
}) => (
  <div style={layoutStyle}>
    <Toast
      style={{ padding: 8, zIndex: 19 }}
      latestPodcast={latestPodcast}
    />
    <Header
      onContentChange={onContentChange}
      latestPodcast={latestPodcast}
    />
    {children}
    <Footer episodes={episodes} lastPlayedEpisode={lastPlayedEpisode} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  onContentChange: PropTypes.func.isRequired,
  latestPodcast: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  episodes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
  lastPlayedEpisode: PropTypes.string,
};

Layout.defaultProps = {
  children: null,
  latestPodcast: {
    title: '',
    content: '',
  },
  episodes: [],
  lastPlayedEpisode: undefined,
};

export default Layout;
