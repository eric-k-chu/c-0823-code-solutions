/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const desc =
    person.name +
    ' is a ' +
    person.occupation +
    ' from ' +
    person.birthPlace +
    '.';
  return desc;
}
