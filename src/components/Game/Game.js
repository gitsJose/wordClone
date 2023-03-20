import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm  from '../guessForm';
import GuessResults from '../guessResults/guessResults';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guessList, setGuessList] = React.useState([[''],[''],[''],[''],[''],['']])
  const [guessCount, setGuessCount] = React.useState(0)
  let frontEndCount = guessCount + 1;

  function handleSubmission(playerGuess, guessCount){
    let newList = [...guessList]
    newList[guessCount] = checkGuess(playerGuess, answer)
    // console.log("NewListTest",newList)

    /* code works, trying something new - exercise 4
    let newList = [...guessList]
    let splitGuess = playerGuess.split('')
    console.log(splitGuess, 'splitGuess')
    splitGuess.forEach((letter,index) => {
      newList[guessCount][index] = letter
    })
    */
    setGuessList(newList)
    setGuessCount(guessCount + 1);
    console.log(guessCount,newList, newList[guessCount], 'Testing HandleSubmission / newList')
    console.log(guessCount,guessList, guessList[guessCount], 'Testing HandleSubmission / GuessList')

  }

  return <>
    <GuessResults guessList={guessList} guessCount={guessCount} />
    <GuessForm handleSubmission={handleSubmission} guessCount={guessCount} />
  </>;
}

export default Game;
