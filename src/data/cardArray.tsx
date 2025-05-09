import Surf from "../components/View/Surf"
import MMO from "../components/View/MMO"
import Travel from "../components/View/Travel"
import MMODisplay from "../components/Display/MMO"
import SurfDisplay from "../components/Display/Surf"
import TravelDisplay from "../components/Display/Travel"
import {travelCard, jkCard, gameCard} from "../data/cards"

const cardArray = [
    {
        component: Surf,
        display: SurfDisplay,
        url: "jk2l2",
        ...jkCard[0]
    },
    {
        component: Travel,
        display: TravelDisplay,
        url: "travel-guide",
        ...travelCard[0]
        
    },
    {
        component: MMO,
        display: MMODisplay,
        url: "mmo-daily",
        ...gameCard[0]
    },
]

export default cardArray