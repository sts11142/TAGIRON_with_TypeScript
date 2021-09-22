import { cardDeck } from "./CardDeck.js";

type CardCase = {
  color: number,
  num: string,
  isSelected: boolean,
  location: number
}

export function setCard(elems: NodeListOf<HTMLDivElement>): void {
  let i: number // カウンタ変数
  let j: number // カウンタ変数
  let myCardCase: CardCase[] = []   // 手札の並び替えに使用
  let enemCardCase: CardCase[] = [] // 手札の並び替えに使用
  let tmpCardCase: CardCase         // 手札の並び替えに使用
  let tmpCardLocation: number       // 手札の並び替えに使用
  const ALLOFCARDS = 18 // 数字カード山札の総数 9枚 * 2

  for (i = 0; i < elems.length; i++) {
    while(true) {
      let rnd = Math.floor(Math.random() * ALLOFCARDS)
      let card = cardDeck[rnd]
      if(!card.isSelected) {
        if(i < 6) {
          enemCardCase.push(card)
        } else {
          myCardCase.push(card)
        }
        // elems[i].innerHTML = card.num + card.color.toString()
        card.location = i // どのカードかを記録
        card.isSelected = true // 選択済み
        // console.log(card.locatio n)
        break
      }
    }
  }

  // 手札を並び替える
  for(i = 0; i < enemCardCase.length - 1; i++) {
    for(j = i + 1; j < enemCardCase.length; j++) {
      if(enemCardCase[i].num > enemCardCase[i].num) {
        tmpCardCase = enemCardCase[i]
        enemCardCase[i] = enemCardCase[j]
        enemCardCase[j] = tmpCardCase
        
        tmpCardLocation = enemCardCase[i].location
        enemCardCase[i].location = enemCardCase[j].location
        enemCardCase[j].location = tmpCardLocation
      } else if(enemCardCase[i].)
    }
  }
}