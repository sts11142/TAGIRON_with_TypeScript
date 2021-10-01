import { QCARDDECK } from "./QCardDeck.js";


export class Qcard {
  constructor(no: number) {
    this.no = no
  }

  private no: number = 0

  private ability: string = QCARDDECK[this.no].Ability
}