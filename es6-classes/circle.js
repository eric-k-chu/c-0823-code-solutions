/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  #radius;
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.#radius = radius;
  }

  describe() {
    return super.describe() + ` This also has a radius of ${this.#radius}.`;
  }
}

const circle1 = new Circle(4);
console.log('circle1: ', circle1);
console.log(circle1.describe());
