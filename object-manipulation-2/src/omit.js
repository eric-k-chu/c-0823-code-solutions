/* exported omit */

function omit(source, keys) {
  const obj = { ...source };

  for (const key in source) {
    for (const element of keys) {
      if (key === element) {
        delete obj[key];
      }
    }
  }
  return obj;
}
