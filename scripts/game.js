class Game {
	constructor() {
		this.context = new Canvas(384, 480, "#3C4043")
		this.image = new Sprite("assets/tileset.png")
	}
	createMap(tileSize) {
		this.tileSize = tileSize
		this.mapSize = Math.min( this.context.canvas.width , this.context.canvas.height ) / this.tileSize
		this.run()
	}
	run() {
		this.image.onload = e => {
		this.context.strokeStyle = "#64b5f6"
		this.context.fillStyle = "#e74c3c"

		let tileNum = 0
		for( let y = 0; y <= this.mapSize; y++ ){
			for( let x = 0; x <= this.mapSize; x++ ){
				this.context.drawImage(
					this.image,
					0, 
					0,
					32,
					32,
					y*this.tileSize,
					x*this.tileSize,
					this.tileSize,
					this.tileSize)

				this.context.rect(
					y*this.tileSize,
					x*this.tileSize,
					this.tileSize,
					this.tileSize)
 					this.context.stroke()








					}
				// console.log(y)
			}
		}
	}



}

const game = new Game()

game.createMap(32)


console.log(game)
