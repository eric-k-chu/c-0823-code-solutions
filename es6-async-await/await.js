import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function readOnce() {
  const response = await read('foo/bar.html');
  console.log(elapsed(), 'readOnce:', response);
}

async function readSeveral() {
  const response1 = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', response1);

  const response2 = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2:', response2);

  const response3 = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral3:', response3);
}

async function readChained() {
  const response1 = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', response1);

  const response2 = await read(response1);
  console.log(elapsed(), 'readChained2:', response2);

  const response3 = await read(response2);
  console.log(elapsed(), 'readChained2:', response3);
}

await readOnce();
await readSeveral();
await readChained();
