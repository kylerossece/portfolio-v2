
import Card from "../Card"
import {travelCard} from "../../data/cards"

import type { ViewProps } from "../../types/portfolioTypes"

const Travel = ({ onClose }: ViewProps) => {
    return (
        <Card card={travelCard[0]} isDisplay={false} onClose={onClose}/>
    )
}

export default Travel