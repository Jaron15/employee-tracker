const connection = require('./connection');
const inquirer = require('inquirer');


function showDepartments() {
    connection.query("SELECT * FROM departments", function(err, res) {
       if (err) throw err;
       const departments = res;
       console.table(departments)

   })
}

function showRoles() {
    connection.query("SELECT * FROM roles", function(err, res) {
       if (err) throw err;
       const roles = res;
       console.table(roles);

   })
};

function showEmployees() {
    connection.query("SELECT * FROM employees", function(err, res) {
       if (err) throw err;
       const employees = res;
       console.table(employees);

   })
}

function addDepartment(name) {
    connection.query("INSERT INTO departments SET ?", {department: name}, function(err, res) {
       if (err) throw err;
 
        console.log(res.affectedRows);
        
        showDepartments();
        // mainMenu();
    })
 }

 function addRole(role, salary, dep) {
    connection.query("INSERT INTO roles (role, salary, department) VALUES (?, ?, ?)", [role, salary, dep], function(err, res) {
       if (err) throw err;
 
        console.log('Role has been added!');
        
    })
 }

 function addEmployee(firstName, lastName, jobTitle, dep, salary, manager) {
    connection.query("INSERT INTO employees (first_name, last_name, job_title, department, salary, manager) VALUES (?, ?, ?, ?, ?, ?)", [firstName, lastName, jobTitle, dep, salary, manager], function(err, res) {
       if (err) throw err;
 
        console.log('Employee has been added!');
        showEmployees();

    })
 }

// addDepartment();
// showDepartments();
// showRoles();
// showEmployees();
// addRole()

 module.exports = 
 { showDepartments,
    showRoles,
    showEmployees, 
    addDepartment,
    addRole,
    addEmployee
     }