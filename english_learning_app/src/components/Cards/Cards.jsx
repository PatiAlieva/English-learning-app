import React, { useState, useEffect, useRef } from 'react';
import CSSModules from 'react-css-modules';
import style from './cards.module.scss';

function Cards({data}, {onCount}) {
  const {id, english, transcription, russian, count} = data;

  //перевод слова при клике на кнопку
  const [isVisible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible(!isVisible);
    onCount(data[count].id);
  };

   //фокус на кнопку
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.focus()
  },[english])

  //отрисовка карточки
  return (
    <div styleName='card'>
      <div styleName='card_container'>
        <div styleName='card_container_word'>{english}</div>
        <div styleName='card_container_transcription'>{transcription}</div>
        <div onClick={handleShow} disabled={isVisible}>
          {isVisible ? <div styleName='btnTranslate'>{russian}</div> :
          <button ref={btnRef} styleName='btnVisible'>Проверить</button>}
        </div>
        <div onClick={onCount}><p>I know this word</p></div>
      </div>
    </div>
  );
};

export default CSSModules(Cards, style);
