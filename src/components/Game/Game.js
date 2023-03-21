import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm  from '../guessForm';
import GuessResults from '../guessResults/guessResults';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guessList, setGuessList] = React.useState([[''],[''],[''],[''],[''],['']])
  const [guessCount, setGuessCount] = React.useState(0)
  const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(false) ;

  function handleSubmission(playerGuess, guessCount){
    let newList = [...guessList]
    newList[guessCount] = checkGuess(playerGuess, answer)
    
    if(playerGuess == answer){
      setIsAnswerCorrect(true);
    }

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
    <GuessForm handleSubmission={handleSubmission} guessCount={guessCount} isAnswerCorrect={isAnswerCorrect} />
    {(isAnswerCorrect == true || guessCount == 6) ? <Banner isAnswerCorrect={isAnswerCorrect} answer={answer} guessCount={guessCount}/> : ""}
  </>;
}

export default Game;
