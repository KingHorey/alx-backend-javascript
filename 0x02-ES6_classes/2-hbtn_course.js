export default class HolbertonCourse {
  /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((x) => typeof (x) === 'string')) {
      throw new TypeError('Students must be an array of strings');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    this._name = value;
  }

  set length(value) {
    this._length = value;
  }

  set students(value) {
    this._students = value;
  }
}
