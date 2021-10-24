const connection = require("./connection");
const inquirer = require("inquirer");
const {
  showDepartments,
  showRoles,
  showEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("./queries");

function mainMenu() {
  inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
      ],
    })
    .then(function (answers) {
      const choice = answers.action;

      if (choice === "view all departments") {
        showDepartments();
        mainMenu();
      } else if (choice === "view all roles") {
        showRoles();
        mainMenu();
      } else if (choice === "view all employees") {
        showEmployees();
        mainMenu();
      } else if (choice === "add a department") {
        depPrompt();
      } else if (choice === "add a role") {
        rolePrompt();
      } else if (choice === "add an employee") {
        employeePrompt();
      } else if (choice === "update an employee role") {
        updatePrompt();
      }
    });
}
// inquirer functions
function depPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department?",
      },
    ])
    .then(function (answers) {
      const department = answers.name;

      addDepartment(department);
      mainMenu();
    });
}

function employeePrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "fname",
        message: "What is the first name of the employee?",
      },
      {
        type: "input",
        name: "lname",
        message: "What is the last name of the employee?",
      },
      {
        type: "input",
        name: "role",
        message: "What is this employee's job title?",
      },
      {
        type: "input",
        name: "dep",
        message: "What department is this employee in?",
      },
      {
        type: "number",
        name: "salary",
        message: "What is this employee's salary?",
      },
      {
        type: "input",
        name: "manager",
        message: "What manager does this employee report to?",
      },
    ])
    .then(function (answers) {
      const firstName = answers.fname;
      const lastName = answers.lname;
      const jobTitle = answers.role;
      const dep = answers.dep;
      const salary = answers.salary;
      const manager = answers.manager;

      console.log(firstName, lastName, jobTitle, dep, salary, manager);

      addEmployee(firstName, lastName, jobTitle, dep, salary, manager);

      mainMenu();
    });
}

function rolePrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "role",
        message: "What is the name of the role?",
      },
      {
        type: "number",
        name: "salary",
        message: "What is the salary for this role?",
      },
      {
        type: "input",
        name: "dep",
        message: "What department does this role belong to?",
      },
    ])
    .then(function (answers) {
      const role = answers.role;
      const salary = answers.salary;
      const dep = answers.dep;
      console.log(role, salary, dep);

      addRole(role, salary, dep);

      mainMenu();
    });
}

function updatePrompt() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "id",
        message: "What is the ID number of this employee?",
      },
      {
        type: "input",
        name: "role",
        message: "what is the employee's new role?",
      },
    ])
    .then(function (answers) {
      const role = answers.role;
      const id = answers.id;

      console.log(role, id);

      updateEmployeeRole(role, id);

      mainMenu();
    });
}
mainMenu();
