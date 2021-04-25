// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  return `![Github license]('https://opensource.org/licenses/${license}')`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//     if(license === "None"){
//         return ""
//     }
//     // return [License](#license)

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return;

`# ${data.ProjectTitle}

${renderLicenseBadge(data.license)}

  ## Description

  ${data.ProjectDescription}

  - 
  -[Installation](#installation)
  - [Usage](#usage)
  - 
  - 
  - 
  - 
${renderLicenseLink(data.license)}


  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}






  `;

}

module.exports = generateMarkdown;
