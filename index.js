const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./Lib/manager");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
// const teamJS = require ("./cards.js");
const { team } = require ("./cards.js");



const teamArray = [];  // --> [Manager, Engineer, Enginer, Intern]
// createTeam(teamArray) --> we send the TEAM ARRAY to CARDS.sj
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

                    //createTeam();
                    // WE have USER DATA to create a NEW Manager Object INSTANCE
                    var newManager = new Manager(answers.name, answers.id, answers.email, officeNumber.officeNumber, answers.role)

                    // Adding the NEW MANAGER OBJECT to our teamARRAY
                    teamArray.push(newManager);
                    addMoreEmployees();
                })
                break;
            case 'Engineer':
                inquirer.prompt({
                    type: "input",
                    message: "What is the employee's GitHub username?",
                    name: "github"
                }).then(function (github){
                    var newEngineer = new Engineer(answers.name, answers.id, answers.email, github.github, answers.role)
                   // createTeam();
                   teamArray.push(newEngineer);
                    addMoreEmployees();
                })
                break;
            case 'Intern':
                inquirer.prompt({
                    type: "input",
                    message: "What university does the employee attend?",
                    name: "school"
                }).then(function (school) {
                    var newIntern = new Intern(answers.name, answers.id, answers.role, answers.email, school.school)
                   // createTeam();
                   teamArray.push(newIntern);
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
            // Verify we have created a new TEAM
            console.log(teamArray);
            createHTML();
        }
    }).catch(err => {
        console.log("An error occurred adding another member. Please try again.", err);
        throw err;
    })
    
    
function createHTML() {
    // CRTEATE THE HTML PAGE --> PASS IT DATA WE collected from the USER
    var resultData = team(teamArray);  // this 'should' be our constructed HTML page
    fs.writeFileSync("./assets/index.html", data, err);
}
}

initializeApp();

