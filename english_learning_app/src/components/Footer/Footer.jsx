import React from 'react';
import CSSModules from 'react-css-modules';
import style from './footer.module.scss';

function Footer() {
  return (
    <div styleName='footer'>
      <p>by Patima Alieva  |  2023</p>
      <div><a href='https://.pngtree.com/so/Ошибка'>Ошибка png из .pngtree.com/</a></div>
    </div>
  )
}

export default CSSModules(Footer, style);