import { cardDeck } from "./CardDeck.js";
import SwapCards from "./SwapCards.js";

export type CardCase = {
  color: number,
  num: number,
  isSelected: boolean,
  location: number
}

export function setCard(elems: NodeListOf<HTMLDivElement>): void {
  let i: number // カウンタ変数
  let j: number // カウンタ変数
  let k: number // カウンタ変数
  let CardCases: [CardCase[], CardCase[]] = [[], []] // CardCases[0]: 相手, [1]: 自分
  // let myCardCase: CardCase[] = []   // 手札の並び替えに使用
  let enemCardCase: CardCase[] = [] // 手札の並び替えに使用
  // let tmpCardCase: CardCase         // 手札の並び替えに使用
  // let tmpCardLocation: number       // 手札の並び替えに使用
  const ALLOFCARDS = 18 // 数字カード山札の総数 9枚 * 2
  const Swap = new SwapCards()

  // 山札からランダムにカードを選んで相手・自分に振り分ける
  for (i = 0; i < elems.length; i++) {
    while(true) {
      let rnd = Math.floor(Math.random() * ALLOFCARDS)
      let card = cardDeck[rnd]
      if(!card.isSelected) {
        if(i < 6) {
          CardCases[0].push(card)
          // enemCardCase.push(card)
        } else {
          CardCases[1].push(card)
          // myCardCase.push(card)
        }
        // elems[i].innerHTML = card.num + card.color.toString()
        card.location = i // どのカードかを記録
        card.isSelected = true // 選択済み
        // console.log(card.locatio n)
        break
      }
    }
  }

  // 手札を適切な形に並び替える
  //    小さい数字が左側
  //    数字が同じ時は赤色(color = 0)が左側
  for (k = 0; k < 2; k++) { // k = 0: 相手の手札,  k = 1: 自分の手札
    for(i = 0; i < CardCases[k].length - 1; i++) {
      for(j = i + 1; j < CardCases[k].length; j++) {
        if(CardCases[k][i].num > CardCases[k][i].num) {
          // カードの位置を交換する
          Swap.swapCard(CardCases[k][i], CardCases[k][j])
          Swap.swapCardLocation(CardCases[k][i].location, CardCases[k][j].location)
        } else if(CardCases[k][i].num === CardCases[k][j].num) {
          if(CardCases[k][i].color > CardCases[k][j].color) { // 赤色が左側に並ぶようにする
            Swap.swapCard(CardCases[k][i], CardCases[k][j])
            Swap.swapCardLocation(CardCases[k][i].location, CardCases[k][j].location)
          }
        }
      }
    }
  }

  // 手札を表示する
  for(i = 0; i < 2; i++) {
    for(j = 0; j < 5; j++) {
      let card = CardCases[i][j]
  
      if(i === 1) j += 5
      elems[j].innerHTML = (card.num).toString()
      console.log(card)
    }
  }
  console.log(CardCases)
}