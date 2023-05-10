import React, { useEffect } from 'react';
import {NavLink, Link} from "react-router-dom";
import CSSModules from 'react-css-modules';
import style from './header.module.scss';

function Header() {

  // const stickyHeader = () => {
  //   useEffect(() => {
  //     window.addEventListener('scroll', isSticky);
  //           return () => {
  //               window.removeEventListener('scroll', isSticky);
  //           };
  //   });

  //   const isSticky = (e) => {
  //     const header = document.querySelector('.header-section');
  //     const scrollTop = window.scrollY;
  //     scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  // };

  //className="header-section d-none d-xl-block"
  return (
    <header>
      <div styleName='header'>
        <Link to = "/" className='logo'>
          logo
        </Link>
        <nav styleName='header_nav'>
          <ul className='header_nav_menu'>
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/dictionary">Dictionary</NavLink></li>
            <li><NavLink to = "/game">Game</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default CSSModules(Header, style);
