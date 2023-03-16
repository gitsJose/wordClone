import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm  from '../guessForm'
import GuessResults from '../guessResults/guessResults';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guessList, setGuessList] = React.useState(['','','','',''])
  const [guessCount, setGuessCount] = React.useState(0)

  function handleSubmission(playerGuess, guessCount){
    let newList = [...guessList]
    console.log(guessCount,newList, newList[guessCount], 'Testing')
    newList[guessCount] = playerGuess
    
    setGuessList(newList)
    setGuessCount(guessCount + 1);
    console.log(guessCount,newList, newList[guessCount], 'TestingAfter')
  }

  return <>
  <GuessResults guessList={guessList} setGuessList={setGuessList} />
  <GuessForm handleSubmission={handleSubmission} guessCount={guessCount}/>
  </>;
}

export default Game;
