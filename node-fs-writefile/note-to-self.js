import fs from 'node:fs/promises';

const [, , text] = process.argv;

async function writeFile() {
  await fs.writeFile('./note.txt', `${text}\n`, { flag: 'a+' });
}

try {
  await writeFile();
} catch (err) {
  console.log(err);
}
