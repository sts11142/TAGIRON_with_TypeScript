export class Card {
    constructor(card: HTMLDivElement[]) {
        let cardCollor: number[] = []
        for (let i = 0; i < card.length; i++) {
            cardCollor.push(Math.floor(Math.random() * 2))
        }

        this.card = card
    }
    private card: HTMLDivElement[]

    public cardGen(): void {
        for (let i = 0; i < this.card.length; i++) {
            this.card[i].innerHTML = Math.floor(Math.random() * 10).toString()
        }
    }
}