import { TILEDECK } from "./TileDeck.js";
import SwapTiles from "./SwapTiles.js";

export type TileType = {
  color: number,
  num: number,
  isSelected: boolean,
  location: number
}

export function SetTiles(elems: NodeListOf<HTMLDivElement>): void {
  let i: number // カウンタ変数
  let j: number // カウンタ変数
  let k: number // カウンタ変数
  let l: number = 0 // カウンタ変数
  let TileCase: [TileType[], TileType[]] = [[], []] // TileCase[0]: 相手, [1]: 自分
  let tile: TileType
  // let myCardCase: CardCase[] = []   // 手札の並び替えに使用
  // let enemCardCase: CardCase[] = [] // 手札の並び替えに使用
  // let tmpCardCase: CardCase         // 手札の並び替えに使用
  // let tmpLoc: number       // 手札の並び替えに使用
  const ALLOFCARDS = 18 // 数字カード山札の総数 9枚 * 2
  const Swap = new SwapTiles()

  // 山札からランダムにカードを選んで相手・自分に振り分ける
  for (i = 0; i < elems.length; i++) {
    while(true) {
      let rnd = Math.floor(Math.random() * ALLOFCARDS)
      let card = TILEDECK[rnd]
      if(!card.isSelected) {
        if(i < 5) {
          TileCase[0].push(card)
          // enemCardCase.push(card)
        } else {
          TileCase[1].push(card)
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

  // debug
  console.log(TileCase)

  // 手札を適切な形に並び替える
  //    小さい数字が左側
  //    数字が同じ時は赤色(color = 0)が左側
  for(i = 0; i < TileCase.length; i++) {
    TileCase[i].sort((a, b) => {
      if(a.num > b.num) {
        Swap.swapTileLocation(a.location, b.location)
        return 1
      }
      else if(a.num === b.num) {
        if(a.color > b.color) {
          Swap.swapTileLocation(a.location, b.location)
          return 1
        }
      }
      return -1
    })
  }


  // for (k = 0; k < 2; k++) { // k = 0: 相手の手札,  k = 1: 自分の手札
  //   for(i = 0; i < TileCase[k].length - 1; i++) {
  //     for(j = i + 1; j < TileCase[k].length; j++) {
  //       if(TileCase[k][i].num > TileCase[k][i].num) {
  //         // カードの位置を交換する
  //         Swap.swapCard(TileCase[k][i], TileCase[k][j])
  //         Swap.swapCardLocation(TileCase[k][i].location, TileCase[k][j].location)

  //         // debug
  //         console.log("=====")
  //         console.log(TileCase[k][i], TileCase[k][j])
  //         console.log("=====")
  //       } else if(TileCase[k][i].num === TileCase[k][j].num) {
  //         if(TileCase[k][i].color > TileCase[k][j].color) { // 赤色が左側に並ぶようにする
  //           Swap.swapCard(TileCase[k][i], TileCase[k][j])
  //           Swap.swapCardLocation(TileCase[k][i].location, TileCase[k][j].location)
  //           // debug
  //           console.log("=====")
  //           console.log(TileCase[k][i], TileCase[k][j])
  //           console.log("=====")
  //         }
  //       }
  //     }
  //   }
  // }

  // 手札を表示する
  
  for(i = 0; i < 2; i++) {
    for(j = 0; j < 5; j++) {
      // elem[]: index 0~9 に対応させる
      if(i === 0) {
        l = j
      } else {
        l = j + 5
      }
      tile = TileCase[i][j]
      elems[l].innerHTML = (tile.num).toString()
      if(tile.color === 1) {
        elems[l].style.background = 'rgb(81, 126, 224)'
      }
      // console.log(card)
    }
  }

  // debug
  console.log(TileCase)
}