import takeAChance from './take-a-chance.js';

const promise = takeAChance('Eric');

promise
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message));
