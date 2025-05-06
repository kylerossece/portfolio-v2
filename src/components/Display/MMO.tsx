
import Card from "../Card"
import {gameCard} from "../../data/cards"

const MMODisplay = () => {
    return (
        <Card card={gameCard[0]} isDisplay={true} />
    )
}

export default MMODisplay