import React from 'react';
import {Link} from "react-router-dom";
import CSSModules from 'react-css-modules';
import style from './main.module.scss';

function Home() {
  return (
    <div styleName='container'>
      <div>
      <h1>Название</h1>
      <p>Что-нибудь приветственное</p>
      <Link to ='/game' className='game_btn'>Let's game</Link>
      </div>

    </div>
  )
}

export default CSSModules(Home, style);