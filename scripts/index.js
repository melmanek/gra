class Sprite {
  constructor(file, array) {
    this.array = array
    this.image = new Image();
    this.image.onload = e => {

      this.draw( )
    };
    this.image.src = file;
  }
  draw(){
    const [sx,sy,sw,sh,x,y,w,h] = this.array
    game.c.drawImage(this.image, sx,sy,sw,sh,x,y,w,h)
  }

}

class GameMap {
  constructor(tile) {
    this.tile = tile


  }
}

class Game extends Tilemap {
  constructor() {
    super()
    this.canvas = document.createElement("canvas");
    this.c = this.canvas.getContext("2d");
  }
  start(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    document.body.appendChild(this.canvas);
  }

}
const im = `assets/tileset.png`
const game = new Game();

game.start(320, 460);
const grass = [ 0, 0, 32, 32,0,0, 32,32,32]
game.grass = new Sprite(im, grass )
console.log(game);
