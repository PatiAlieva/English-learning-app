import { useState, useContext } from 'react';
import { glContext } from '../../Context/MyContext';
import Cards from "../../components/Cards/Cards";
//import data from "../../data.json";
import CSSModules from 'react-css-modules';
import style from './game.module.scss';

function Game() {
  const {dataContext, setDataContext} = useContext(glContext); 

  //const [count, setCount] = useState(0)//handlePrev & Next
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const {learnedWords, setlearnedWords} = useState(false);//handleCount
  const [learnedWordsIndex, setlearnedWordsIndex] = useState([]);//
  const [wordsNumber, setWordsNumber] = useState(0);
  
  //const [vocabulary, setVocabulary] = useState(data);//

  //Prev card
  const handlePrev = () => {
    if (currentCardIndex === 0) {
      setCurrentCardIndex(dataContext.length - 1)
    } else {
      setCurrentCardIndex(currentCardIndex - 1)
    }
  };
  //Next card
  const handleNext = () => {
    if (currentCardIndex === dataContext.length - 1) {
      setCurrentCardIndex(0);
    } else {
      setCurrentCardIndex(currentCardIndex + 1)
    }
  };

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
             english={dataContext[currentCardIndex].english}
             transcription={dataContext[currentCardIndex].transcription}
             russian={dataContext[currentCardIndex].russian}
             handleCount={handleCount}
             count = {currentCardIndex}
             dataContext={dataContext} 
             key={currentCardIndex}
             />
        )}
      <button onClick={handleNext} styleName='prevnext'>next</button>
    </div>
  );
};

export default CSSModules(Game, style);

