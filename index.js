// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },
        {
            type: 'input',
            name: 'description',
            message: 'Tell me about your project?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install it?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },  
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use it?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          }, 
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices:['MIT License','Boost Software License','Apache License 2.0','N/A'],
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },
        {
            type: 'input',
            name: 'contributions',
            message: 'How can someone contribute to this project?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          }, 
        {
            type: 'input',
            name: 'test',
            message: 'How to test the project?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },  
        {
            type: 'input',
            name: 'Question',
            message: 'What is your Github Username?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },
        {
            type: 'input',
            name: 'Question',
            message: 'What is your Email?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },
         
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
