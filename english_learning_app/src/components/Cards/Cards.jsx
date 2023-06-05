import React, { useState, useEffect, useRef, useContext } from 'react';
import CSSModules from 'react-css-modules';
//import { glContext } from '../../Context/MyContext';
import style from './cards.module.scss';

function Cards(props) {
  //const {dataContext, setDataContext} = useContext(glContext);
  const {english, transcription, russian, count, dataContext, handleCount} = props;
  // console.log(dataContext);
  //перевод слова при клике на кнопку
  const [isVisible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible(!isVisible);
    handleCount(dataContext[count].id);

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
      </div>
    </div>
  );
};

export default CSSModules(Cards, style);
