const student = {
  firstName: 'Eric',
  lastName: 'Chu',
  age: 23,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);

const vehicle = {
  make: 'honda',
  model: 'civic',
  year: '2020',
};

vehicle['color'] = 'navy';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'cash',
  type: 'cat',
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
