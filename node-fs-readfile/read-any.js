import { readFile } from 'node:fs/promises';

const [, , filePath] = process.argv;

async function readMyFile() {
  const file = await readFile(filePath, { encoding: 'utf-8' });
  console.log(file);
}

try {
  await readMyFile();
} catch (e) {
  console.log('Error has occured: ', e);
}
