import { TileType } from "./TileDeck";

  export function swapTiles(TileCase: TileType[][]): TileType[][] {
    // 手札を適切な形に並び替える
    //    小さい数字が左側
    //    数字が同じ時は赤色(color = 0)が左側
    let i: number

    for(i = 0; i < TileCase.length; i++) {
      TileCase[i].sort((a, b) => {
        if(a.num > b.num) {
          // swap.swapTileLocation(a.location, b.location)
          return 1
        }
        else if(a.num === b.num) {
          if(a.color > b.color) {
            // swap.swapTileLocation(a.location, b.location)
            return 1
          }
        }
        return -1
      })
    }

    return TileCase
  }

  // export function swapTileLocation(cardLoc1: number, cardLoc2: number): void {
  //   let tmpCardLoc: number

  //   tmpCardLoc = cardLoc1
  //   cardLoc1 = cardLoc2
  //   cardLoc2 = tmpCardLoc
  // }

  export function showTiles(TileCase: TileType[][], elems: NodeListOf<HTMLDivElement>): void {
    let i: number, j: number // カウンタ変数
    let l: number = 0 // インデックス記憶変数
    let tile: TileType


    for(i = 0; i < 2; i++) {
      for(j = 0; j < 5; j++) {
        // elem[]: index 0~9 に対応させる
        if(i === 0) {
          l = j
        } else {
          l = j + 5
        }

        tile = TileCase[i][j]

        // 手札のタイルに数字を表記する
        elems[l].innerHTML = tile.num.toString()

        /**
         * タイルの色を適切な形に変更する
         *    tile.color === 0: 赤
         *               === 1: 青 (default)
         *    tile.num   === 5: 黄
         */ 
        if(tile.color === 1) {
          elems[l].style.background = 'rgb(81, 126, 224)'
        }
        if(tile.num === 5) {
          elems[l].style.background = 'rgb(214, 224, 81)'
        }
      }
    }
  }
