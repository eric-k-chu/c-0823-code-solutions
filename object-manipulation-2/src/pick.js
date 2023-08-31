/* exported pick */

function pick(source, keys) {
  const obj = {};
  for (const key in source) {
    for (const element of keys) {
      if (key === element && source[key] !== undefined) {
        obj[key] = source[key];
      }
    }
  }
  return obj;
}
