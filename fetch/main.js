async function getData(str) {
  try {
    const response = await fetch(str);
    if (!response.ok) {
      throw new Error(`Something has gone wrong: ${response.status}`);
    }
    const result = await response.json();
    console.log('Success: ', result);
  } catch (err) {
    console.error(err);
  }
}

const users = 'https://jsonplaceholder.typicode.com/users';
const pokemon = 'https://pokeapi.co/api/v2/pokemon/69';

getData(users);
getData(pokemon);
