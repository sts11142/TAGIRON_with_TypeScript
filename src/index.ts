import { cardDeck } from "./CardDeck"

const gameScreen = document.querySelector<HTMLDivElement>('#gameScreen')
const numCards = document.querySelectorAll<HTMLDivElement>('.numCard')

for (let i = 0; i < numCards.length; i++) {
    numCards[i].innerHTML = Math.floor(Math.random() * 10).toString()
}