import React from "react";

function SentGuess({guessList,setGuessList}) {
  return (
  <div className="guess-results">
    {guessList.map((guess,index) => (
      <p className="guess" key={`${guess.guess}${index}`}>{guess.guess}</p>)
      )
    }
  </div>);
}

export default SentGuess;
