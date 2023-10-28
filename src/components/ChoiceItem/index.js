import {ListItem, Button, Image} from './styledComponents'

const ChoiceItem = props => {
  const {choiceDetails, clickOnButton} = props
  const {id, imageUrl} = choiceDetails
  const rockDataId = id === 'ROCK' ? 'rockButton' : ''
  const scissorsDataId = id === 'SCISSORS' ? 'scissorsButton' : ''
  const paperDataId = id === 'PAPER' ? 'paperButton' : ''

  const gameStarted = () => {
    clickOnButton(id)
  }

  return (
    <ListItem>
      <Button
        type="button"
        onClick={gameStarted}
        data-testid={`${rockDataId} ${scissorsDataId} ${paperDataId}`}
      >
        <Image src={imageUrl} alt={id} />
      </Button>
    </ListItem>
  )
}

export default ChoiceItem
