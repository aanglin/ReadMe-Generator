// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
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
            name: 'questions.git',
            message: 'What is your Github Username?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },
        {
            type: 'input',
            name: 'questions.email',
            message: 'What is your Email?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },
         
    ])
  }
   
  const getDone = ({title,description,installation,usage,license,contributions,test,questions})=>
`# ${title}
# Description
        ${description}
# Table of Contents
      * [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Contribution](#contribution)
      * [Test](#test)
      * [Questions](#questions)
# Installation
        ${installation}
# Usage
        ${usage}
# License
        ${license}
# Contribution
        ${contributions}
# Test
        ${test}
# Questions 
        ${questions.git}
# Questions 
        ${questions.email}  `    
        
        function renderLicenseBadge(license) {
          let licenseType = license.license; 
          let yourLicense = ''
          if(licenseType === 'MIT') {
            yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
          } else if (licenseType === 'Boost Software License') {
            yourLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
          } else if (licenseType === 'Apache License 2.0') {
            yourLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
          } else {
            license.license = "N/A"
          }
          return yourLicense;
        };
         generateMarkdown(data) 
           `# ${data.title}
          ${renderLicenseBadge(license)`#license`}
        `;
        
        
        // module.exports = generateMarkdown;
        
        



      
    
// TODO: Create a function to write README file
//  function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
 const init = () => {
   promptUser()
   .then((data) =>{
    const filename = getDone(data)
    
    fs.writeFile('README.md',getDone(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
    
  });
 }

// Function call to initialize app
 init();
