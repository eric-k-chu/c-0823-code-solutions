/* exported Shape */
class Shape {
  #area;
  #perimeter;

  constructor(area, perimeter) {
    this.#area = area;
    this.#perimeter = perimeter;
  }

  describe() {
    return `This shape has an area of ${this.#area} and a perimeter of ${
      this.#perimeter
    }.`;
  }
}

const shape1 = new Shape(10, 15);
console.log('shape1: ', shape1);
console.log(shape1.describe());
