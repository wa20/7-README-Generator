const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");


// create writeFile function using promises instead of a callback function
const writeFileSync = util.promisify(fs.writeFile);


const questions = [
  
    {
      type: "input",
      name: "name",
      message: "Enter your name: ",
      validate: function (userAnswer) {
        if (userAnswer === "") {
          return console.log("Please input user name");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "githubUserName",
      message: "What is your GitHub username?",
      validate: function (userAnswer) {
        if (userAnswer === "") {
          return console.log("Please input link to github profile");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "githubRepo",
      message: "Enter repo name: ",
      validate: function (userAnswer) {
        if (userAnswer === "") {
          return console.log("Please input link to github profile");
        }
        return true;
      },
    },

    {
      type: "input",
      name: "ProjectTitle",
      message: "Enter Project Title: ",
      validate: function (userAnswer) {
        if (userAnswer === "") {
          return console.log("Please input Project Title");
        }
        return true;
      },
    },

    {
      type: "input",
      name: "ProjectDescription",
      message:
        "Provide a short description explaining the Why(motivation), What(problem solved), and How(build and learnings) of your project? ",
    },

    {
      type: "input",
      name: "Install",
      default:
        "npm install",
    },

    {
      type: "input",
      name: "UserInstructions",
      message:
        "Provide a step-by-step description of how to get the development environment running:",
    },

    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test",
    },

    {
      type: "input",
      name: "credits",
      message:
        "List collaborators, if any, with links to their GitHub profiles: ",
    },

    {
      type: "list",
      name: "license",
      message: "Choose your license for your project: ",
      choices: [
        "None",
        "MIT",
        "Apache-2.0",
        "GNU AGPLv3",
        "Mozilla Public License 2.0",
      ],
    },
 
];

// Function to write README file using the user input
const writeToFile = (fileName, data) => {
  writeFileSync(fileName, data);
};

// Function to initialize app
const generateReadme = () => {
  inquirer.prompt(questions)
  .then((data) => {
    console.log('Generating README...')
    writeToFile("README.md", generateMarkdown({...data}))
    })
    
    
};

generateReadme();
