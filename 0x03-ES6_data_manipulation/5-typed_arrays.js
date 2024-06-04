export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const dv = new DataView(buffer);
  dv.setInt8(position, value);
  return dv;
}
