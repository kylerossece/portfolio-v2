
import Card from "../Card"
import {gameCard} from "../../data/cards"
import type { ViewProps } from "../../types/portfolioTypes"

const MMO = ({ onClose }: ViewProps) => {
    return (
        <Card card={gameCard[0]} isDisplay={false} onClose={onClose}/>
    )
}

export default MMO