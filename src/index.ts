import { SetTiles } from "./SetTiles.js"


const gameScreen = document.querySelector<HTMLDivElement>('#gameScreen')
const numberTiles = document.querySelectorAll<HTMLDivElement>('.numberTile')

SetTiles(numberTiles)



