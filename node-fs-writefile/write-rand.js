import fs from 'node:fs/promises';

async function writeFile() {
  await fs.writeFile('./random.txt', `${Math.random()}\n`, { flag: 'a+' });
}

try {
  await writeFile();
} catch (err) {
  console.log(err);
}
