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

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
