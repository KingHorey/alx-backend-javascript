export default function getStudentsByLOcation(getListStudents, city) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.filter((x) => x.location === city);
}
