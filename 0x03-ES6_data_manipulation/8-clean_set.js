export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const newArray = [];
  set.forEach((x) => {
    const string = new RegExp(`^${startString}+`);
    const regex = string.test(x);
    if (regex === true) {
      const newString = x.slice(startString.length);
      newArray.push(newString);
    }
  });
  return (newArray.join('-'));
}
