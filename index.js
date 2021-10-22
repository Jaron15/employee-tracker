const connection = require('./connection');
const inquirer = require('inquirer');

function mainMenu() {
    inquirer
    .prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
         'view all departments',
         'view all roles', 
         'view all employees', 
         'add a department', 
         'add a role', 
         'add an employee',
         'update an employee role'
    ]
    })
    .then(function(answers) {
        const choice = answers.action;

        if (choice === "view all departments") {
            showDepartments();
        } else if (choice === "view all roles") {
            
        } else if (choice === "view all employees") {
            
        } else if (choice === "add a department") {
            
        } else if (choice === "add a role") {
            
        } else if (choice === "add an employee") {
            
        } else if (choice === "update an employee role") {
            
        }
    })
}