import React from 'react';
import { useState } from 'react';
import Cards from "../../components/Cards/Cards";
import data from "../../data.json";
import CSSModules from 'react-css-modules';
import style from './game.module.scss';

function Game() {
  const [count, setCount] = useState(0)//handlePrev & Next
  
  const {learnedWords, setlearnedWords} = useState(false);//handleCount
  const [learnedWordsIndex, setlearnedWordsIndex] = useState([]);//
  const [vocabulary, setVocabulary] = useState(0);//

  //Prev card
  const handlePrev = () => {
    if (count - 1 < 0) {
      setCount(data.length - 1);
    } else {
      setCount(count - 1);
    };
  }
  //Next card
  const handleNext = () => {
    if (count + 1 >= data.length) {
      setCount(0);
    } else {
      setCount(count + 1)
    };
  }

  //счётчик выученных слов
  const handleCount = (id) => {
    const dataArr = [...learnedWordsIndex];
    dataArr.push(id);
    let result = [];

    dataArr.forEach((el) => {
      if (!result.includes(el)) {
        result.push(el);
      }
    })

    setlearnedWordsIndex(result);
    setVocabulary(result.length);

    if (result.length === data.length) {
      setlearnedWords(true)
    }
  };
  

  return (
    <div styleName='cards'>
      <div styleName='cards_counter'>
        {learnedWords ? <span>You've learnt all the words!</span> :
        <span>Learned words: {vocabulary} / {data.length}</span>}
      </div>
      <button onClick={handlePrev} styleName='prevnext'>prev</button>
      <Cards data = {data[count]} count={count} onCount={handleCount} key={count}/>
      <button onClick={handleNext} styleName='prevnext'>next</button>
      <button onClick={handleCount}>I know this word</button>
    </div>
  );
};

export default CSSModules(Game, style);

        // {data.map((item) =>
        // <Cards
        //   isEdited={false}
        //   key={item.id}
        //   english={item.english}
        //   russian={item.russian}
        //   transcription={item.transcription}>
        // </Cards>
        // )
        // }
