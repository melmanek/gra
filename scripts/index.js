// import { Canvas } from './canvas.js'
// import { Sprite } from './sprite.js'
// import { Tilemap } from './tilemap.js'

import { Game } from './game.js'

const w = innerWidth
const h = innerHeight
const color = "#3C4043"

const G = new Game(w,h,color)

G.start


console.log(G.map)
