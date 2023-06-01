import React, { useEffect } from 'react';
import {NavLink, Link} from "react-router-dom";
import CSSModules from 'react-css-modules';
import style from './header.module.scss';

function Header() {

  return (
    <header>
      <div styleName='header'>
        <Link to = "/" styleName='header_logo'>logo
        </Link>
        <nav styleName='header_nav'>
          <ul styleName='header_nav_menu'>
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
