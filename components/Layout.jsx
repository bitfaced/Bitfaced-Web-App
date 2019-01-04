import React from 'react';
import { PropTypes } from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  height: '100%',
  width: '100%',
};

const Layout = ({ onContentChange, children }) => (
  <div style={layoutStyle}>
    <Header
      onContentChange={onContentChange}
    />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  onContentChange: PropTypes.func.isRequired,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
