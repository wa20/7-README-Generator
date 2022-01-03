

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
function renderLicenseSection(license) {
    if(license === "None"){
        return ""
    }
    return `![Github license]('https://choosealicense.com/licenses/${license}/')`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.ProjectTitle}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.ProjectDescription}

  ## Contents Table
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Tests](#Tests)
  - [Collaborators](#Collaborators)
  - [License](#License)
  - [Author](#Author)


## Installation
To install necessary dependencies, run the following command:
${data.Install}

## Usage
${data.UserInstructions}

## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`

## Collaborators
${data.credits}


## License
- ${renderLicenseBadge(data.license)}
- ${renderLicenseLink(data.license)}
- ${renderLicenseSection(data.license)}

## Author
- ${data.name}
- Find the repo for this on: (https://github.com/${data.githubUserName}/${data.githubRepo}/).
- If you have any questions about the repo, open an issue or contact me directly at ${data.email}
- You can find more of my work at [${data.githubUserName}](https://github.com/${data.githubUserName}/).

 `;
}

module.exports = generateMarkdown;
