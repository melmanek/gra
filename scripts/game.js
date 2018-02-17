import { Canvas } from './canvas.js'
import { Sprite } from './sprite.js'
import { Tilemap } from './tilemap.js'


export class Game {
	constructor(w,h,color) {
		this.tileSize = 32
		this.square = Math.min( w, h ) // (width > height ? height : width )
		this.mapSize = 20
		this.engine = new Canvas( this.square, color )
		this.image = new Sprite("assets/tileset.png")
		this.map = new Tilemap( this.mapSize * this.mapSize )
	}

	get start() {
		 this.draw()
	}

	draw() {
		let random = (min, max) => {
			return Math.floor( Math.random() * (max - min) )+ min
		}
		this.image.onload = e => {
		// this.engine.strokeStyle = color
		// this.engine.fillStyle =  "#e74c3c"

		for( let y = 0; y <= this.mapSize; y++ ){
			for( let x = 0; x <= this.mapSize; x++ ){

				this.engine.drawImage(
					this.image,
					random(6,9) * this.tileSize,
					random(0,1) * this.tileSize,
					this.tileSize,
					this.tileSize,
					y*this.tileSize,
					x*this.tileSize,
					this.tileSize,
					this.tileSize)

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
