import React from 'react';
import CSSModules from 'react-css-modules';
import style from './notfound.module.scss';
import img from './notfound.png';

function NotFound() {
  return (
    <div styleName='notfound'>
      <div styleName='notfound_animation'>
        <img src={img}/>
      </div>
      <p>Sorry, page not found :&#9001;</p>
    </div>
  )
}

export default CSSModules(NotFound, style);
