import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessForm({handleSubmission, guessCount}) { 
  const [playerGuess, setPlayerGuess] = React.useState('')
    
  function handleFormSubmit(event){
    event.preventDefault();
    if(guessCount == NUM_OF_GUESSES_ALLOWED){
      window.alert('Max Number of Guesses Reached')
      return
    }
    // console.log('handlesubmit', playerGuess, guessCount)
    handleSubmission(playerGuess, guessCount)
    setPlayerGuess('')
  }

  return (
    <form className ="guess-input-wrapper"onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input id="guess-input" type="text" value={playerGuess} minLength="5" maxLength="5" onChange={event => (
        setPlayerGuess(event.target.value.toUpperCase())
      )}/>
    </form>
    )
}

export default GuessForm;
