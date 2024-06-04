export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return 0;
  }
  return getListStudents.reduce((acc, x) => {
    const total = acc + x.id;
    return total;
  }, 0);
}
