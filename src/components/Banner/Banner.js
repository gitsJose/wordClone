import React from "react";

function Banner({ isAnswerCorrect, answer, guessCount }) {
  let winnerBanner = (
  <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> You managed to get it in <strong>{guessCount} guesses</strong>!
    </p>
  </div>)

let sadBanner = (
  <div className="sad banner">
    <p>
      <strong>Sorry,</strong> the correct answer is <strong>{answer}</strong>!
    </p>
  </div>)

  return(guessCount == 6 && isAnswerCorrect == false ? sadBanner : winnerBanner )
}

export default Banner;
