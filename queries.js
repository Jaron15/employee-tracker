const connection = require('./connection');
const inquirer = require('inquirer');

function showDepartments() {
    connection.query("SELECT * FROM department", function(err, res) {
       if (err) throw err;
       const departments = res;
       console.table(departments)

   })
}


function addDepartment() {
    connection.query("INSERT INTO department SET ?", {name: "HR"}, function(err, res) {
       if (err) throw err;
 
        console.log(res.affectedRows);
   
    })
 }

// addDepartment();
 showDepartments();

 module.exports = { showDepartments, addDepartment, }