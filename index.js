const inquirer = require('inquirer') 

const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project title",
    },

    {
        type: "input",
        name: "Description",
        message: "Enter project description",
    },

    {
        type: "input",
        name: "installation",
        message: "Enter steps for installation",
    },

    {
        type: "input",
        name: "Usage",
        message: "Describe what project will be used for",
    },

    {
        type: "input",
        name: "contribution",
        message: "Enter contribution info",
    },

    {
        type: "input",
        name: "email",
        message: "For questions (email)",
    },

    {
        type: "input",
        name: "github",
        message: "For questions (github)",
    },

    {
        type: "list",
        name: "license",
        message: "Type of license used",
        choices: ['None', 'ISC', 'MIT'],
        filter(val) {
            return val;
        }
    }
]