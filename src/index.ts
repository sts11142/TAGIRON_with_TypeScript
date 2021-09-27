import { SetTiles } from "./SetTiles.js"

const gameScreen = document.querySelector<HTMLDivElement>('#gameScreen')
const numCards = document.querySelectorAll<HTMLDivElement>('.numCard')

SetTiles(numCards)

// for (let i = 0; i < numCards.length; i++) {
//     numCards[i].innerHTML = Math.floor(Math.random() * 10).toString()
// }