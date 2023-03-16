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
  // guessCount starts from 0, to better work with arrays. 
  // if we want to show on FrontEnd, use frontEndCount, as it's incremented by 1, to better match actual count.
  const [guessList, setGuessList] = React.useState(['','','','',''])
  const [guessCount, setGuessCount] = React.useState(0)
  let frontEndCount = guessCount + 1;

  //create copy of current list of guesses, then slide in our guess at the appropriate position
  // set new list as state, and increase our guess count
  function handleSubmission(playerGuess, guessCount){
    let newList = [...guessList]
    newList[guessCount] = playerGuess  
    setGuessList(newList)
    setGuessCount(guessCount + 1);
    console.log(guessCount,newList, newList[guessCount], 'Testing HandleSubmission / GuessList')
  }

  return <>
    <GuessResults guessList={guessList} setGuessList={setGuessList} />
    <GuessForm handleSubmission={handleSubmission} guessCount={guessCount} />
  </>;
}

export default Game;
