import Surf from "../components/View/Surf"
import MMO from "../components/View/MMO"
import Travel from "../components/View/Travel"
import {travelCard, jkCard, gameCard} from "../data/cards"

const cardArray = [
    {
        component: Surf,
        ...jkCard[0]
    },
    {
        component: Travel,
        ...travelCard[0]
        
    },
    {
        component: MMO,
        ...gameCard[0]
    },
]

export default cardArray