export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(data) {
      return Object.keys(data).length;
    },
  };
}
