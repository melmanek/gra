// import { Canvas } from './canvas.js'
// import { Sprite } from './sprite.js'
// import { Tilemap } from './tilemap.js'

import {
  Game
} from './game.js'

const w = innerWidth
const h = innerHeight
const color = "#3C4043"

const G = new Game(w, h, color)

let arr  = [1, 2, 3, 4];

G.start

//console.log(G.map.length)
//G.map.forEach((item, index, array) => console.log(item, index, array));
