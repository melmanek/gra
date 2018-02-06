class Game {
	constructor() {
		this.context = new Canvas(384, 480, "#3C4043")
		this.image = new Sprite("assets/tileset.png")
	}
	createMap() {
		this.tileSize = 32
		this.mapSize = Math.min( this.context.canvas.width , this.context.canvas.height ) / this.tileSize
		this.run()
	}
	random(min, max) {
		return Math.floor( Math.random() * (max - min) )+ min
	}
	run() {
		this.image.onload = e => {
		this.context.strokeStyle = "#64b5f6"
		this.context.fillStyle = "#e74c3c"
		this.ground = {
			x : this.random(6,9),
			y : this.random(0,1)
		}

		console.log(this.ground)

		for( let y = 0; y <= this.mapSize; y++ ){
			for( let x = 0; x <= this.mapSize; x++ ){

				this.context.drawImage(
					this.image,
					this.random(6,9) *this.tileSize,
					this.random(0,1) *this.tileSize,
					this.tileSize,
					this.tileSize,
					y*this.tileSize,
					x*this.tileSize,
					this.tileSize,
					this.tileSize)

				// this.context.rect(
				// 	y*this.tileSize,
				// 	x*this.tileSize,
				// 	this.tileSize,
				// 	this.tileSize)
 				// 	this.context.stroke()

					}

			}
		}
	}



}

const game = new Game()

game.createMap(32)


console.log(game)
