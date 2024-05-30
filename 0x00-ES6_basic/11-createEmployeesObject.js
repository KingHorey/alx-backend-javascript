export default function createEmployeesObject(departmentName, employees) {
  const workers = employees;
  return {
    [`${departmentName}`]: workers,
  };
}
