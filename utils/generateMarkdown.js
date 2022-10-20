// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
    case 'GNU General Public License v3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]`
    case 'No license':
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT License':
      return `[MIT](https://opensource.org/licenses/MIT)`
    case 'Mozilla Public License 2.0':
      return `[Mozilla](https://opensource.org/licenses/MPL-2.0)`
    case 'Apache License 2.0':
      return `[Apache](https://opensource.org/licenses/Apache-2.0)`
    case 'GNU General Public License v3.0':
    return `[GNU](https://www.gnu.org/licenses/gpl-3.0)`
  case 'No license':
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let link = renderLicenseLink(license);
  
  if (link != "") {
    return ` ## License
    This application is covered under the following licensing. For more information about the licensing, please visit this link. 
    - [${license}](${link})`;
  }
    return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.desc}

  ---

  ## Table of Contents 
  -  [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)


  ---

  ## Installation
  ${data.install}

  ---

  ## Usage
  ${data.usage}
  ---

  ## License
  
  ${renderLicenseSection(data.license)}

  --- 

  ## Contributing 
  ${data.contribution}
  ---

  ## Tests
  ${data.test}
  ---

  ## Questions 

  If there are any questions, contact me at ${data.email}, or visit my Github at https://github.com/${data.username}.

  
`;
}

module.exports = generateMarkdown;
