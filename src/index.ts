import { setCard } from "./SetCard.js"

const gameScreen = document.querySelector<HTMLDivElement>('#gameScreen')
const numCards = document.querySelectorAll<HTMLDivElement>('.numCard')

setCard(numCards)

// for (let i = 0; i < numCards.length; i++) {
//     numCards[i].innerHTML = Math.floor(Math.random() * 10).toString()
// }