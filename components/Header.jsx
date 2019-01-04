import React from 'react';
import { PropTypes } from 'prop-types';
import Meta from './Meta';
import SideMenu from './SideMenu';

const iconStyle = {
  padding: 15,
};

const Header = ({ onContentChange }) => (
  <div style={iconStyle}>
    <Meta />
    <SideMenu
      onContentChange={onContentChange}
    />
  </div>
);

Header.propTypes = {
  onContentChange: PropTypes.func.isRequired,
};

export default Header;
