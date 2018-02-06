class Sprite {
  constructor(file) {
    this.radians = Math.PI * 180
    this.image = new Image()

    this.image.src = file
    return this.image
  }
  draw() {
    this.image.onload = e => {

    }
  }
}
