// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Write a description for your project'
    },
    {
        type: 'input',
        name: 'install',
        message: "How do you install this project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How is this project used?"
    },
    {
        type: 'list',
        name: 'license',
        message: "What license does this project have?",
        choices:[
            'MIT License',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'No License'
        ] 
    },
    { 
        type: 'input',
        name: 'contribution',
        message: "How many other people contributed to the project?"
    },
    {
        type: 'input',
        name: 'test',
        message: "What are some tests for this project?"
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {    
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success! Your README file was created.')
    );    
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput){
    console.log(userInput);
    writeToFile("README1.md", generateMarkdown(userInput))

  })
}

// Function call to initialize app
init();
