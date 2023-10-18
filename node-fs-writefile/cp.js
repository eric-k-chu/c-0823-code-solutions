import fs from 'node:fs/promises';

const [, , f1, f2] = process.argv;

async function copyToFile() {
  const f1Content = await fs.readFile(f1);
  await fs.writeFile(f2, f1Content);
}

try {
  await copyToFile();
} catch (err) {
  console.log(err);
}
