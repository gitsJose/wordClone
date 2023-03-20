import React from "react";
import {range} from '../../utils'


function Grid({guessList, guessCount}) {
  let rows = range(0, 6, 1)
  let cols = range(0,5,1)
  
  return (
    <div className="guess-results">
    {rows.map(((row,index) => (
      <p className="guess" key={`${index}`}>
        {cols.map((col,index) => {
          // return (<span className="cell" key={`${row}-${index}`}>{ !!guessCount ? guessList[guessCount-1][index] : ''}</span>)
          return (<span className={guessList[row][index] ? `cell ${guessList[row][index].status}` : 'cell'} key={`${row}-${index}`}>{ guessList[row][index] ? guessList[row][index].letter : ''}</span>)
        })}
      </p>
    )))}
    </div>
  )

  // return <div />;
}

export default Grid;
