import React from 'react';
import Logo from '../icon/Logo/logo.js';
import HeaderContent from './header-content/header-content';

const Header = () => (
  <header className="mf-header mb-52">
    <div className="mf-header_logo mf-wrp mb-36">
      <Logo/>
    </div>
    <nav className="header-nav">
      {/* <ul className="header-nav-list">
        <li className="header-nav-list-item">
          <a href="#features">Features</a>
        </li>
        <li className="header-nav-list-item">
          <a href="#howto">How To</a>
        </li>
      </ul> */}
    </nav>
    <HeaderContent/>
  </header>
);

export default Header;
