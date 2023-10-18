import { readFile } from 'node:fs/promises';

async function readMyFile() {
  const file = await readFile('./dijkstra.txt', { encoding: 'utf-8' });
  console.log(file);
}

try {
  await readMyFile();
} catch (e) {
  console.log('Error has occured: ', e);
}
