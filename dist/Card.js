export class Card {
    constructor(card) {
        let cardCollor = [];
        for (let i = 0; i < card.length; i++) {
            cardCollor.push(Math.floor(Math.random() * 2));
        }
        this.card = card;
    }
    cardGen() {
        for (let i = 0; i < this.card.length; i++) {
            this.card[i].innerHTML = Math.floor(Math.random() * 10).toString();
        }
    }
}
//# sourceMappingURL=Card.js.map