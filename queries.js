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

function addDepartment() {
    connection.query("INSERT INTO departments SET ?", {name: "HR"}, function(err, res) {
       if (err) throw err;
 
        console.log(res.affectedRows);
   
    })
 }

// addDepartment();
showDepartments();
showRoles();
showEmployees()

 module.exports = { showDepartments, addDepartment, }