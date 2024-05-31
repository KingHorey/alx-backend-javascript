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
    if (typeof (value) === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(value) {
    if (typeof (value) === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((x) => typeof (x) === 'string')) {
      throw new TypeError('Students must be an array of strings');
    } else {
      this._students = value;
    }
  }
}
