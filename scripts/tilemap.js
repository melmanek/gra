export class Tilemap {
  constructor(tileNo) {
    this.rows = 10
    this.cols = 10
    this.tsize = 32
    this.map = [
      3, 4, 4, 4, 4, 4, 4, 4, 4, 5,
      6, 1, 1, 1, 1, 1, 1, 1, 1, 7,
      6, 1, 1, 1, 1, 2, 1, 1, 1, 7,
      6, 1, 1, 1, 1, 1, 1, 1, 1, 7,
      6, 1, 1, 2, 1, 1, 1, 1, 1, 7,
      6, 1, 1, 1, 2, 1, 1, 1, 1, 7,
      6, 1, 1, 1, 2, 1, 1, 1, 1, 7,
      6, 1, 1, 0, 0, 1, 1, 1, 1, 7,
      6, 1, 1, 1, 2, 1, 1, 1, 1, 7,
      8, 10, 10, 10, 10, 10, 10, 10,10, 9
    ]

  }
  getTile(col, row) {
    return this.map[row * this.cols + col]
  }
}
