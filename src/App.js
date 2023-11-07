import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ChoiceItem from './components/ChoiceItem'
import GameResultView from './components/GameResultView'

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

  clickedOnRetryButton = () => {
    this.setState({clickOnGameButton: false})
  }

  renderRockScissorsPaperGame = () => {
    const {opponentList, youList} = this.state
    let gameResult: ''
    return (
      <div>
        {youList.map(eachYou => (
          <GameResultView
            youDetails={eachYou}
            key={eachYou.id}
            clickedOnRetryButton={this.clickedOnRetryButton}
            opponentList={opponentList}
            gameResult={gameResult}
          />
        ))}
      </div>
    )
  }

  render() {
    const {initialScore, clickOnGameButton} = this.state

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
