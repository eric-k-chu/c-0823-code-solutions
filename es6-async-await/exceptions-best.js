import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.

  const response = await read('foo', true);
  console.log(elapsed(), 'throwOnce:', response);
}

async function throwSeveral() {
  const response1 = await read('foo1', true);
  console.log(elapsed(), 'throwSeveral1:', response1);

  const response2 = await read('foo2', true);
  console.log(elapsed(), 'throwSeveral2:', response2);

  const response3 = await read('foo3', true);
  console.log(elapsed(), 'throwSeveral3:', response3);
}

async function throwChained() {
  const response1 = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained1:', response1);

  const response2 = await read(response1);
  console.log(elapsed(), 'throwChained2:', response2);

  const response3 = await read(response2);
  console.log(elapsed(), 'throwChained3:', response3);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (e) {
  console.log(elapsed(), e.message);
}
