import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm  from '../guessForm'
import SentGuess from '../sentGuess/sentGuess';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guessList, setGuessList] = React.useState([])

  function handleSubmission(guess){
    let newList = [...guessList, guess]
    setGuessList(newList)
  }

  return <>
  <SentGuess guessList={guessList} setGuessList={setGuessList}/>
  <GuessForm handleSubmission={handleSubmission} /></>;
}

export default Game;
