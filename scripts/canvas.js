export class Canvas {
	constructor(square,color) {
		this.canvas = document.createElement("canvas");
		this.c = this.canvas.getContext("2d");
		this.canvas.width = square
		this.canvas.height = square
		document.body.appendChild(this.canvas);
		this.clear(color)
		return this.c
	}
	clear(color) {
		this.c.beginPath()
		this.c.fillStyle = color
		this.c.fillRect(0,0, this.square , this.square )
		this.c.closePath();
	}


}
