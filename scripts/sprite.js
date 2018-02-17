export class Sprite {
  constructor(file) {
    this.image = new Image()
    this.image.src = file
    return this.image
  }

}
