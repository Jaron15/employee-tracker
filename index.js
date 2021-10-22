const connection = require('./connection');
const inquirer = require('inquirer');
const  { showDepartments,
    showRoles,
    showEmployees, 
    addDepartment,
     } = require('./queries');

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
            showRoles();
          
        } else if (choice === "view all employees") {
            showEmployees();
            
        } else if (choice === "add a department") {
            depPrompt();
        } else if (choice === "add a role") {
            
        } else if (choice === "add an employee") {
            
        } else if (choice === "update an employee role") {
            
        }
    })
}

function depPrompt() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?'
        }]).then(function(answers) {
            const department = answers.name;

            addDepartment(department);
        })       
}
mainMenu()