import React from 'react'
import { useState } from 'react';
import Game from '../../pages/Game/Game';

export default function CardsLearned() {
    const [learnedWords, setLearnedWords] = useState(0);

    const handleLearned = () => {
        setLearnedWords(learnedWords + 1);
    };
  return (
    <>
        <div styleName="learned_words">
            <p>You've learned {learnedWords} words!</p>
            <Game handleLearned={handleLearned} />
        </div>
    </>
  );
}
