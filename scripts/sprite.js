class Sprite {
  constructor(file, tilesize) {
    this.tilesize = tilesize
    this.radians = Math.PI * 180
    this.image = new Image()

    this.image.src = file
    return this.image
  }

}
