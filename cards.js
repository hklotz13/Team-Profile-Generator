//creates team
function createTeam(team) {
//array to push cards/info to
const htmlArray = [];

//formats card for manager role
const createManager = function (manager) {
    return `
    <div class ="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}>${manager.email}</a></p>
                <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`;
}

//formats card for engineer role
const createEngineer = function (engineer) {
    return `
    <div class ="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}>${engineer.email}</a></p>
                <p class="github">GitHub: ${engineer.github}</p>
            </div>
        </div>
    </div>`;
}

//formats card for intern role
const createIntern = function (intern) {
    return `
    <div class ="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}>${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>`;
}

//grabs info from functions to add to cards, then add to array
html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => createManager(manager)));
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => createEngineer(engineer))
    .join(""));
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => createIntern(intern))
    .join(""));
return html.join("");
}

//exports to create final html page
function team() {
    return `
        <!DOCTYPE html>
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Team Info</title>
            <link rel="stylesheet" href="style.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/da8217140b.js" crossorigin="anonymous"></script>
        </head>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="row col-12 justify-content-center">
                        ${createTeam(team)}
                    </div>
                </div>
            </div>
        </body>
        </html>`;
};

module.exports = {createTeam, team};