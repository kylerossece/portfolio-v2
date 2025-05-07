
import Card from "../Card"
import {jkCard} from "../../data/cards"
import type { ViewProps } from "../../types/portfolioTypes"

const Surf = ({ onClose }: ViewProps) => {
    return (
        <Card card={jkCard[0]} isDisplay={false} onClose={onClose}/>
    )
}

export default Surf