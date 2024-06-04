export default function hasValuesFromArray(set, array) {
  if (!Array.isArray(array)) return false;
  return array.every((x) => set.has(x));
}
