import Card from "../Card"
import {travelCard} from "../../data/cards"

const TravelDisplay = () => {
    return (
        <Card card={travelCard[0]} isDisplay={true}/>
    )
}

export default TravelDisplay