//import Employee from "./employee";
const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github, role) {
        super (name, id, email);
        this.github = github;
        this.role = role;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}
module.exports = Engineer;