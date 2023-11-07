const GameResultView = props => {
  const {youDetails, opponentList, clickedOnRetryButton} = props
  const {id, imageUrl} = youDetails
  const clickOnRetry = () => {
    clickedOnRetryButton()
  }
  console.log(`YouID:${id}`)
  console.log(`OpponentID: ${opponentList.id}`)
  // console.log(`GameResult: ${gameResult}`)
  const opponentId = opponentList.id
  let finalGameResult = ' '
  if (id === 'ROCK' && opponentId === 'PAPER') {
    finalGameResult = 'YOU LOSE'
  } else if (id === 'PAPER' && opponentId === 'ROCK') {
    finalGameResult = 'YOU WON'
  } else if (id === 'SCISSORS' && opponentId === 'ROCK') {
    finalGameResult = 'YOU LOSE'
  } else if (id === 'SCISSORS' && opponentId === 'PAPER') {
    finalGameResult = 'YOU WON'
  } else if (id === 'ROCK' && opponentId === 'SCISSORS') {
    finalGameResult = 'YOU WON'
  } else if (id === 'PAPER' && opponentId === 'SCISSORS') {
    finalGameResult = 'YOU LOSE'
  } else {
    finalGameResult = 'IT IS DRAW'
  }
  console.log(finalGameResult)

  return (
    <div>
      <div className="game-container">
        <div className="persons-container">
          <h3>YOU</h3>
          <img src={imageUrl} alt="your choice" className="you-image" />
        </div>
        <div className="persons-container">
          <h3>OPPONENT</h3>
          <img
            src={opponentList.imageUrl}
            alt="opponent choice"
            className="you-image"
          />
        </div>
        <div className="result-retry-button-container">
          <p>{finalGameResult}</p>
          <button type="button" onClick={clickOnRetry} className="retry-button">
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameResultView
