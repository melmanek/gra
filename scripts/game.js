class Game extends Canvas {
	constructor(){
		super()

	}
  start(width, height) {
    this.canvas.width = width
    this.canvas.height = height
    document.body.appendChild(this.canvas);
  }
  

}
