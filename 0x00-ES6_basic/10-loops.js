export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;
  for (const idx of array) {
    const value = newArray[idx];
    newArray[idx] = appendString + value;
  }

  return array;
}
