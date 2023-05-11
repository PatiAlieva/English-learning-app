import React from 'react';
import { useState } from 'react';
import Cards from "../../components/Cards/Cards";
import data from "../../data.json";
import CSSModules from 'react-css-modules';
import style from './game.module.scss';

function Game() {
  const [count, setCount] = useState(0)
  const [learnedWordsIndex, setlearnedWordsIndex] = useState(0);
  const {learnedWords, setlearnedWords} = useState([]);

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
  const handleLearned = () => {
    if (!learnedWords.includes(data)) {
      learnedWords.push(data);
      setlearnedWordsIndex(learnedWordsIndex + 1);
    }
  };
  

  return (
    <div styleName='cards'>
      <div styleName='cards_counter'>Learned words: 
        <p> {" "}</p>
        <span className='counter_words'>{learnedWordsIndex}</span>
      </div>
      <button onClick={handlePrev} styleName='prevnext'>prev</button>
      <Cards data = {data[count]} count={count} key={count}/>
      <button onClick={handleNext} styleName='prevnext'>next</button>
      <button onClick={handleLearned}>I know this word</button>
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