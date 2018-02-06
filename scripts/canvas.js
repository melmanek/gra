class Canvas {
	constructor(width, height, color) {
		this.canvas = document.createElement("canvas");
		this.c = this.canvas.getContext("2d");
		this.create(width, height)
		this.clear(color)
		return this.c
	}
	create(width, height) {
		this.canvas.width = width
		this.canvas.height = height
		document.body.appendChild(this.canvas);
	}
	clear(color) {
		this.c.beginPath()
		this.c.fillStyle = color
		this.c.fillRect(0,0, this.canvas.width, this.canvas.height)
		this.c.closePath();
	}

}
