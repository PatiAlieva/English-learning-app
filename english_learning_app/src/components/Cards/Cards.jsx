import React, { useState, useEffect, useRef } from 'react';
import CSSModules from 'react-css-modules';
import style from './cards.module.scss';

function Cards({data}, count) {
  const {english, transcription, russian, id} = data;
  // const [flag, setFlag] = useState(false)
  const [isVisible, setVisible] = useState(false);
  const handleShow = () => {
    setVisible(!isVisible);
};

   //фокус на кнопку
  const btnRef = useRef();

  useEffect(() => {
    // console.log(btnRef);
    btnRef.current.focus()
  },[count])

  // function getTranslate() {
  //   setFlag(true)
  // }
  //      {/* {!flag ? <button onClick = {getTranslate}>SEND ME</button> : <div>{props.russian}</div>} */}

  //отрисовка карточки
  return (
    <div styleName='card' className='animation'>
      <div styleName='card_container'>
        <div className='word'>{english}</div>
        <div className='transcription'>{transcription}</div>
        <button ref={btnRef} className={isVisible ? "btnVisible word" : "btnTranslate"} disabled={isVisible} onClick={handleShow}>
          {isVisible ? russian : "Проверить"}
        </button>
        <p >I know this word</p>
      </div>
    </div>
  );
};

export default CSSModules(Cards, style);
