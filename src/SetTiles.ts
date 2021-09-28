import { TileType, TILEDECK } from "./TileDeck.js";
import { swapTiles, showTiles } from "./SwapAndShow.js";


export function SetTiles(elems: NodeListOf<HTMLDivElement>): void {
  let i: number // カウンタ変数
  let TileCase: [TileType[], TileType[]] = [[], []] // TileCase[0]: 相手, [1]: 自分
  const NUMOFTILES = 18 // 数字カード山札の総数 9枚 * 2

  // 山札からランダムにカードを選んで相手・自分に振り分ける
  for (i = 0; i < elems.length; i++) {
    while(true) {
      let rnd = Math.floor(Math.random() * NUMOFTILES)
      let card = TILEDECK[rnd]
      if(!card.isSelected) {
        if(i < 5) TileCase[0].push(card)
        else TileCase[1].push(card)

        card.location = i // どのカードかを記録
        card.isSelected = true // 選択済みにする

        break
      }
    }
  }

  // 手札を適切な形に並び替える
  swapTiles(TileCase)
  // 手札を表示する
  showTiles(TileCase, elems)
}