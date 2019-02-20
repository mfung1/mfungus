import React from 'react';
import HeaderNav from './header-nav/header-nav';
import HeaderContent from './header-content/header-content';
import image from '../../../assets/image.png';

const Header = () => (
  <header className="mf-header">
    <HeaderNav/>
    <HeaderContent/>
  </header>
);

export default Header;
