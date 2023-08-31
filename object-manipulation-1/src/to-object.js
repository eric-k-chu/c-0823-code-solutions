/* exported toObject */
function toObject(keyValuePair) {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  const obj = {};
  obj[key] = value;
  return obj;
}
