import {
  Canvas
} from './canvas.js'
import {
  Tilemap
} from './tilemap.js'
import {
  Sprite
} from './sprite.js'


const random = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export class Game {
  constructor(w, h, color) {
    this.tileSize = 32
    this.square = Math.min(w, h) // (width > height ? height : width )
    this.mapSize = 20
    this.tileLength = this.mapSize * this.mapSize
    this.engine = new Canvas(this.square, color)
    this.image = new Sprite("assets/tileset.png")
    this.map = new Tilemap()

  }

  ground(x, y) {
    this.engine.drawImage(
      this.image,
      random(6, 9) * this.tileSize,
      random(0, 1) * this.tileSize,
      this.tileSize,
      this.tileSize,
      y * this.tileSize,
      x * this.tileSize,
      this.tileSize,
      this.tileSize)

  }


  get start() {
    this.drawmap()
  }
  drawmap() {
    this.image.onload = e => {
      for (let y = 0; y < this.map.rows; y++) {
        for (let x = 0; x < this.map.cols; x++) {
          let tile = this.map.getTile(x, y);
          let pos = {
            x: 0,
            y: 0
          }

          console.log(tile)

          switch (tile) {
            case 3:
              pos.x = 4
              pos.y = 0
              break;
            case 5:
              pos.x = 5
              pos.y = 0
              break;
            case 8:
              pos.x = 4
              pos.y = 1
              break;
            case 9:
              pos.x = 5
              pos.y = 1
              break;
            case 10:
              pos.x = 1
              pos.y = 3
              break;

            case 4:
              pos.x = 1
              pos.y = 2
              break;
            case 6:
              pos.x = 2
              pos.y = 2
              break;
            case 7:
              pos.x = 3
              pos.y = 3
              break;
							case 2:
	              pos.x = 10
	              pos.y = 0
	              break;

          }
          // if(tile == 3 ){
          // 		pos = 4
          // }
          this.engine.drawImage(
            this.image,
            pos.x * this.map.tsize, // source x
            pos.y * this.map.tsize, // source y
            this.map.tsize, // source width
            this.map.tsize, // source height
            x * this.map.tsize, // target x
            y * this.map.tsize, // target y
            this.map.tsize, // target width
            this.map.tsize // target height
          );



        }
      }
    }
  }
  draw() {

    this.image.onload = e => {

      for (let y = 0; y <= this.mapSize; y++) {
        for (let x = 0; x <= this.mapSize; x++) {

          //this.ground(x, y)

          // this.engine.rect(
          // 	y *this.tileSize,
          // 	x *this.tileSize,
          // 	this.tileSize,
          // 	this.tileSize)
          //
          // 	this.engine.stroke()

        }

      }
    }
  }



}
