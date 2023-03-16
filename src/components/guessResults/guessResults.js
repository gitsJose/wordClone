import React from "react";
// import {range} from '../../utils'
import Grid from "../Grid/Grid";

function GuessResults({guessList,setGuessList, guessCount}) {
  // return (
  // <div className="guess-results">
  //   {guessList.map((guess,index) => (
  //     <p className="guess" key={`${guess}${index}`}>{guess}</p>)
  //     )
  //   }
  // </div>);
  // let splitList = guessList.map(guess => (guess.split('')));
  // console.log('GR',splitList )
  return (
    <Grid guessList={guessList} guessCount={guessCount}/>
  )
}

export default GuessResults;
