console.log("Create your markdown"); // node intial test

const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const generateReadme = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");


const writeFileAsync = util.promisify(fs.writeFile);

const writeToFile = (fileName, data) => {
  writeFileAsync(fileName, data);
};

const init = () => {
  inquirer
    .prompt([
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
        name: "githubRepo",
        message: "enter link to your github profile",
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
        message: "Enter Project Title?",
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
          "Provide a short description explaining the Why(motivation), What(problem solved), and How(build and learnings) of your project?",
      },

      // {
      //   type: "input",
      //   name: "contents",
      //   message: "Table of Contents (Y/N)?", //how to make this an optional step that can be skipped?
      //   choices: ["Y", "N"],
      // },

      {
        type: "input",
        name: "install",
        message:
          "Provide a step-by-step description of how to get the development environment running.",
      },

      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use",
      },

      // {
      //   type: "input",
      //   name: "images",
      //   message: "add supporting image url",
      // },

      {
        type: "input",
        name: "credits",
        message:
          "List collaborators, if any, with links to their GitHub profiles.",
      },

      {
        type: "list",
        name: "license",
        message: "Choose your license for your project.",
        choices: ["None", "MIT", "Apache-2.0", "Microsoft Public License", "Mozilla Public License 2.0"],
      },
    ])
    .then((data) => writeToFile("README.md", generateMarkdown(data)));
};

init();
