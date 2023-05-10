import React from 'react';
import CSSModules from 'react-css-modules';
import style from './footer.module.scss';

function Footer() {
  return (
    <div styleName='footer'>by Patima Alieva  |  2023</div>
  )
}

export default CSSModules(Footer, style);