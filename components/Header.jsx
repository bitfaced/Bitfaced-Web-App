import React from 'react';
import Meta from './Meta';
import SideMenu from './SideMenu';

const iconStyle = {
  padding: 15,
};

const Header = () => (
  <div style={iconStyle}>
    <Meta />
    <SideMenu />
  </div>
);

export default Header;
