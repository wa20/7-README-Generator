console.log("hello node");

const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

const readmeQuestions = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "enter name",

      validate: function (userAnswer) {
        if (userAnswer === "") {
          return console.log("Please input user name");
        }
        return true;
      },
    },

    {
      type: "input",
      name: "user",
      message: "enter link to your github profile",
    },

    {
      type: "input",
      name: "title",
      message: "Enter Project Title?",
    },
    {
      type: "input",
      name: "description",
      message:
        "Provide a short description explaining the Why(motivation), What(problem solved), and How(build and learnings) of your project?",
    },
    {
      type: "input",
      name: "contents",
      message: "Table of Contents (Y/N)?", //how to make this an optional step that can be skipped?

      validate: function (userAnswer) {
        let answer = userAnswer.toUpperCase();

        if (answer === "Y") {
          return console.log("Please input your table contents");
        }
        return true;
      },
    },
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
      choices: [],
    },
  ]);
};
