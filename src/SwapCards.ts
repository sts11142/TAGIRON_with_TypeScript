import { CardCase } from "./SetCard.js";

export default class SwapCards {
  swapCard(card1: CardCase, card2: CardCase): void {
    let tmpCard: CardCase

    tmpCard = card1
    card1 = card2
    card2 = tmpCard
  }

  swapCardLocation(cardLoc1: number, cardLoc2: number): void {
    let tmpCardLoc: number

    tmpCardLoc = cardLoc1
    cardLoc1 = cardLoc2
    cardLoc2 = tmpCardLoc
  }
}