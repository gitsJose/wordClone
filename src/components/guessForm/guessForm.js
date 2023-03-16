import React from "react";

function GuessForm({handleSubmission, guessCount}) { 
  const [playerGuess, setPlayerGuess] = React.useState('')

  
  function handleSubmit(event){
    event.preventDefault();
    // console.log('handlesubmit', playerGuess, guessCount)
    handleSubmission(playerGuess, guessCount)
    setPlayerGuess('')
  }

  return (
    <form className ="guess-input-wrapper"onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input id="guess-input" type="text" value={playerGuess} minLength="5" maxLength="5" onChange={event => (
        setPlayerGuess(event.target.value.toUpperCase())
      )}/>
    </form>
    )
}

export default GuessForm;
