import React from 'react';
import CSSModules from 'react-css-modules';
import style from './notfound.module.scss';

function NotFound() {
  return (
    <div styleName='notfound'></div>
  )
}

export default CSSModules(NotFound, style);
