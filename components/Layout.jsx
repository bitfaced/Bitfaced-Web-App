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

const Layout = ({ onContentChange, children, latestPodcast }) => (
  <div style={layoutStyle}>
    <Header
      onContentChange={onContentChange}
    />
    <Toast
      style={{ padding: 8, zIndex: 19 }}
      latestPodcast={latestPodcast}
    />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  onContentChange: PropTypes.func.isRequired,
  latestPodcast: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

Layout.defaultProps = {
  children: null,
  latestPodcast: {
    title: '',
    content: '',
  },
};

export default Layout;
