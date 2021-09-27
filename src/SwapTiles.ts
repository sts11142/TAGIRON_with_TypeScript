import { TileType } from "./SetTiles.js";

export default class SwapTiles {
  swapTiles(card1: TileType, card2:TileType): void {
    let tmpCard:TileType

    tmpCard = card1
    card1 = card2
    card2 = tmpCard
  }

  swapTileLocation(cardLoc1: number, cardLoc2: number): void {
    let tmpCardLoc: number

    tmpCardLoc = cardLoc1
    cardLoc1 = cardLoc2
    cardLoc2 = tmpCardLoc
  }
}