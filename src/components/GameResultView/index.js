const GameResultView = props => {
  const {
    youDetails,
    opponentList,
    clickedOnRetryButton,
    finalGameResult,
  } = props
  const {imageUrl} = youDetails

  const clickOnRetry = () => {
    clickedOnRetryButton()
  }

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
