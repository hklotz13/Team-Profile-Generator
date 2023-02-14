const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./Lib/manager");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const createTeam = require ("./cards.js");
const team = require ("./cards.js");


const teamArray = [];

//Runs the prompts to ask the user questions, then uses switch/case to determine more specific questions to ask for each role
function initializeApp() {
    inquirer.prompt([{
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "number",
        message: "What is the employee's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email adress?",
        name: "email"
    },
    {
        type: "list",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
   // }]).then(function (name, id, email, role) {
    }]).then(function (answers) {

        console.log(answers);

        switch(answers.role) {
            case 'Manager':
                inquirer.prompt({
                    type: "input",
                    message: "What is the employee's office number?",
                    name: "officeNumber"
                }).then(function (officeNumber){
                    createTeam();
                    addMoreEmployees();
                })
                break;
            case 'Engineer':
                inquirer.prompt({
                    type: "input",
                    message: "What is the employee's GitHub username?",
                    name: "github"
                }).then(function (github){
                    createTeam();
                    addMoreEmployees();
                })
                break;
            case 'Intern':
                inquirer.prompt({
                    type: "input",
                    message: "What university does the employee attend?",
                    name: "school"
                }).then(function (school) {
                    createTeam();
                    addMoreEmployees();
                })
                break;
        }
    })
}
//Prompts the user to repeat the above function to add more employees if they confirm that they need to add more. If not, it will create the HTML file. It also identifies an error and logs a message to the console.
function addMoreEmployees() {
    inquirer.prompt({
        type: "confirm",
        message: "Add more employees to this team?",
        name: "otherEmployees"
    }).then(function (addMoreEmployees) {
        if (addMoreEmployees) {
            initializeApp();
        } else {
            createTeam();
        }
    }).catch(err => {
        console.log("An error occurred adding another member. Please try again.", err);
        throw err;
    })


function createHTML() {
    fs.writeFileSync("./assets/index.html", data, err);
}
}

initializeApp();

