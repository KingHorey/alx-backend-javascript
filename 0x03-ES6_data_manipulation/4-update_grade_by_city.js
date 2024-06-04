/* eslint no-param-reassign: ["error", { "props": false }] */

export default function updateStudentGradeByCity(listData, city, newGrades) {
  if (!Array.isArray(listData)) {
    return [];
  }
  return listData.filter((x) => x.location === city).map((x) => {
    const grade = newGrades.filter((y) => y.studentId === x.id);
    if (grade.length !== 0) {
      x.grade = grade[0].grade;
      return x;
    }

    x.grade = 'N/A';
    return x;
  });
}
