function ExampleConstructor() {}
console.log('value of ExampleConstructor: ', ExampleConstructor);
console.log('type of ExampleConstructor: ', typeof ExampleConstructor);
const constructor = new ExampleConstructor();
console.log('value of constructor: ', constructor);
console.log(
  'constructor instanceOf ExampleConstructor: ',
  constructor instanceof ExampleConstructor
);
