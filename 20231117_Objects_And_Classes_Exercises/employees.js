function createEmployeesList(employeesArr) {
  for (const employee of employeesArr) {
    const personalNumber = employee.length;
    console.log(`Name: ${employee} -- Personal Number: ${personalNumber}`);
  }
}
createEmployeesList([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
createEmployeesList([
  "Samuel Jackson",
  "Will Smith",
  "Bruce Willis",
  "Tom Holland",
]);
JS Front-End Regular Exam - 16 Dec 2023