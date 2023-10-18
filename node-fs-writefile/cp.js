import fs from 'node:fs/promises';

const [, , f1, f2] = process.argv;

async function copyToFile() {
  const f1Text = await fs.readFile(f1, 'utf8');
  await fs.writeFile(f2, f1Text, { flag: 'a+' });
}

try {
  await copyToFile();
} catch (err) {
  console.log(err);
}
