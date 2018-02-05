class Sprite {
  constructor(file) {
    this.radians = Math.PI * 180
    this.image = new Image()
    this.image.onload = e => {
    		this.draw(0,0,16,16,)
    }
    this.image.src = file
  }

  draw(x,y,w,h) {

		if(w == undefined || h == undefined ){
			game.c.drawImage(this.image,x,y)
		} else {
			game.c.drawImage(this.image,x,y,w,h)
		}


  }

}
