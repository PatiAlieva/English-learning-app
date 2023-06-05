import { useState, useContext } from 'react';
import { glContext } from '../../Context/MyContext';
import Cards from "../../components/Cards/Cards";
//import data from "../../data.json";
import CSSModules from 'react-css-modules';
import style from './game.module.scss';

function Game() {
  const {dataContext, setDataContext} = useContext(glContext); 

  const [count, setCount] = useState(0)//handlePrev & Next
  
  const {learnedWords, setlearnedWords} = useState(false);//handleCount
  const [learnedWordsIndex, setlearnedWordsIndex] = useState([]);//
  const [wordsNumber, setWordsNumber] = useState(0);
  
  //const [vocabulary, setVocabulary] = useState(data);//

  //Prev card
  const handlePrev = () => {
    if (count === 0) {
      setCount(dataContext.length - 1)
    } else {
      setCount(count - 1)
    }
  }
  //Next card
  const handleNext = () => {
    if (count === dataContext.length - 1) {
      setCount(dataContext.length - (dataContext.length - 1));
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
    setWordsNumber(result.length);

    if (result.length === dataContext.length) {
      setlearnedWords(true)
    }
  }
  

  return (
    <div styleName='cards'>
      <div styleName='cards_counter'>
        {learnedWords ? <span>You've learnt all the words!</span> :
        <span>Learned words: {wordsNumber} / {dataContext.length}</span>}
      </div>
      <button onClick={handlePrev} styleName='prevnext'>prev</button>
      {dataContext.map(item => 
             <Cards 
             english={dataContext[count].english}
             transcription={dataContext[count].transcription}
             russian={dataContext[count].russian}
             handleCount={handleCount}
             count = {count}
             dataContext={dataContext} 
             key={count}/>
        )}
      <button onClick={handleNext} styleName='prevnext'>next</button>
    </div>
  );
};

export default CSSModules(Game, style);

