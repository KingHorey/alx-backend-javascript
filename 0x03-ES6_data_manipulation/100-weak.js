const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
    return;
  }
  if ((weakMap.has(endpoint)) && (weakMap.get(endpoint) < 4)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  } else {
    throw new Error('Endpoint load is high');
  }
}
// console.log(weakMap)
module.exports = { queryAPI, weakMap };
