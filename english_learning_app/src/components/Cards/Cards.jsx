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
    <div styleName='card'>
      <div styleName='card_container'>
        <div styleName='word'>{english}</div>
        <div styleName='transcription'>{transcription}</div>
        <button ref={btnRef} styleName={isVisible ? "btnVisible" : "btnTranslate"} disabled={isVisible} onClick={handleShow}>
          {isVisible ? russian : "Проверить"}
        </button>
        <button>I know this word</button>
      </div>
    </div>
  );
};

export default CSSModules(Cards, style);
