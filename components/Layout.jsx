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
  listHeight,
  togglePlayList,
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
    <Footer
      episodes={episodes}
      listHeight={listHeight}
      togglePlayList={togglePlayList}
    />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  onContentChange: PropTypes.func.isRequired,
  togglePlayList: PropTypes.func.isRequired,
  latestPodcast: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  episodes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
  listHeight: PropTypes.number,
};

Layout.defaultProps = {
  children: null,
  latestPodcast: {
    title: '',
    content: '',
  },
  episodes: [],
  listHeight: 0,
};

export default Layout;
