import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ChoiceItem from './components/ChoiceItem'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    initialScore: 0,
    initialChoiceList: choicesList,
    clickOnGameButton: false,
    youList: [],
    opponentList: [],
  }

  clickOnButton = id => {
    const {initialChoiceList} = this.state
    this.setState({clickOnGameButton: true})
    const choiceListLength = initialChoiceList.length
    const oppositeList =
      initialChoiceList[Math.floor(Math.random() * choiceListLength)]

    this.setState({opponentList: oppositeList})
    const matchedList = initialChoiceList.filter(eachId => {
      if (eachId.id === id) {
        return eachId
      }
      return null
    })
    this.setState({youList: matchedList})
  }

  clickOnRetry = () => {
    this.setState({clickOnGameButton: false})
  }

  renderRockScissorsPaperGame = () => {
    const {opponentList, youList} = this.state
    const yourId = youList.id
    const opponentId = opponentList.id
    let gameResult = ' '
    if (yourId === 'Rock' && opponentId === 'Paper') {
      gameResult = 'YOU LOSE'
    } else if (yourId === 'Paper' && opponentId === 'Rock') {
      gameResult = 'YOU WON'
    } else if (yourId === 'Scissors' && opponentId === 'Rock') {
      gameResult = 'YOU LOSE'
    } else if (yourId === 'Scissors' && opponentId === 'Paper') {
      gameResult = 'YOU WON'
    } else if (yourId === 'Rock' && opponentId === 'Scissors') {
      gameResult = 'YOU WON'
    } else if (yourId === 'Paper' && opponentId === 'Scissors') {
      gameResult = 'YOU LOSE'
    } else {
      gameResult = 'IT IS DRAW'
    }

    return (
      <div>
        <div className="game-container">
          <div className="persons-container">
            <h3>YOU</h3>
            <img
              src={youList.imageUrl}
              alt="your choice"
              className="you-image"
            />
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
            <p>{gameResult}</p>
            <button
              type="button"
              onClick={this.clickOnRetry}
              className="retry-button"
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {initialScore, clickOnGameButton, youList} = this.state
    console.log(clickOnGameButton)
    console.log(youList)

    return (
      <div className="app-container">
        <div className="title-score-container">
          <div className="titles-container">
            <h3>
              Rock <br />
              Paper <br />
              Scissors
            </h3>
          </div>
          <div className="score-container">
            <p className="score-heading">Score</p>
            <p className="value">{initialScore}</p>
          </div>
        </div>
        {clickOnGameButton ? (
          this.renderRockScissorsPaperGame()
        ) : (
          <ul className="un-ordered-list-items">
            {choicesList.map(eachChoice => (
              <ChoiceItem
                choiceDetails={eachChoice}
                key={eachChoice.id}
                clickOnButton={this.clickOnButton}
              />
            ))}
          </ul>
        )}

        <div className="button-container fixed-bottom">
          <Popup
            modal
            trigger={
              <button type="button" className="rules-button">
                Rules
              </button>
            }
          >
            {close => (
              <div className="rules-container">
                <div className="close-button-container">
                  <button
                    type="button"
                    className="close-button"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </button>
                </div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="game-rules-image"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
