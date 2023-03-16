import React from "react";
// import {range} from '../../utils'
import Grid from "../Grid/Grid";

function GuessResults({guessList, guessCount}) {
  return (
    <Grid guessList={guessList} guessCount={guessCount}/>
  )
}

export default GuessResults;
