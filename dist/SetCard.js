import { cardDeck } from "./CardDeck.js";
export function setCard(elems) {
    let i;
    const ALLOFCARDS = 18;
    for (i = 0; i < elems.length; i++) {
        while (true) {
            let rnd = Math.floor(Math.random() * ALLOFCARDS);
            let card = cardDeck[rnd];
            if (!card.isSelected) {
                elems[i].innerHTML = card.num + card.color.toString();
                card.location = i; // どのカードかを記録
                card.isSelected = true; // 選択済み
                console.log(card.location);
                break;
            }
        }
        // console.log(Math.floor(Math.random() * ALLOFCARDS))
    }
    while (true) {
        let i = 0;
        if (cardDeck[i].isSelected) {
            console.log(cardDeck[i].location + cardDeck[i].num);
            break;
        }
        i++;
    }
}
//# sourceMappingURL=SetCard.js.map