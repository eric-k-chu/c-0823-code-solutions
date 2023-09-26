/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  #width;
  constructor(width) {
    super(width * width, width * 4);
    this.#width = width;
  }

  describe() {
    return super.describe() + ` This also has a width of ${this.#width}.`;
  }
}

const square1 = new Square(5);
console.log('square1: ', square1);
console.log(square1.describe());
