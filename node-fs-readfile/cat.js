import { readFile } from 'node:fs/promises';

const [, , ...filePath] = process.argv;

async function readMyFile() {
  const filePromises = filePath.map((file) =>
    readFile(file, { encoding: 'utf-8' })
  );
  const catFiles = await Promise.all(filePromises);
  console.log(catFiles.join('\n'));
}

try {
  await readMyFile();
} catch (e) {
  console.log('Error has occured: ', e);
}
