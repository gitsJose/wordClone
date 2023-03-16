import React from "react";
import {range} from '../../utils'

function GuessResults({guessList,setGuessList, guessCount}) {
  function grid(numOfRows, numOfCol){
    if(!numOfRows && !numOfCol){
      numOfRows = 5
      numOfCol = 5
    }
    let rows = range(0, numOfRows, 1)
    let cols = range(0, numOfCol, 1)
    
    let splitList = guessList.map(guess => (guess.split('')));
    // let rows = range(1, 5, 1)
    // let cols = range(1,5,1)
    // console.log('split', splitList, guessCount)
    return (
      <>
      {rows.map(((row,index) => (
        <p className="guess" key={`${index}`}>
          {cols.map((col,index) => {
            return (<span className="cell" key={`${col}-${index}`}>{splitList[col][index]}</span>)
          })}
        </p>
      )))}
      </>
    )
  }
  
  let fullGrid = grid(5,5);

  return (
  <div className="guess-results">
    {guessList.map((guess,index) => (
      <p className="guess" key={`${guess}${index}`}>{guess}</p>)
      )
    }
  </div>);
}

export default GuessResults;
