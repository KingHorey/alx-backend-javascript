export default function getListStudentIds(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  if (data.length === 0) {
    return [];
  }

  return (data.map((x) => x.id));
}
