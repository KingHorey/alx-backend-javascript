const weakMap = new WeakMap();

function queryAPI(endpoint) {
    if (endpoint === undefined)
        return;
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  if ((weakMap.has(endpoint)) && (weakMap.get(endpoint) < 5)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    throw new Error('Endpoint load is high');
  }
}

module.exports = { queryAPI, weakMap };
