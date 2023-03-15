import React from "react";

function GuessForm({guess, setGuess, guessList, setGuessList}) { 
  // const [guess, setGuess] = React.useState('')
  function handleSubmit(event){
    event.preventDefault();
      console.log({guess})
      let newList = [...guessList, {guess}]
      setGuessList(newList)
      setGuess('')
  }

  return (
    <form className ="guess-input-wrapper"onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input id="guess-input" type="text" value={guess} minLength="5" maxLength="5" onChange={event => (
        setGuess(event.target.value.toUpperCase())
      )}/>
    </form>
    )
}

export default GuessForm;
