// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// This is the array of questions that will be asked.
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
            choices:['MIT license','GPL v3.0','Apache License 2.0','N/A'],
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },
        {
            type: 'input',
            name: 'contributions',
            message: 'Who contributed to this project?',
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
     
   
   // Function call to initialize app
        
   const init = () => {
          promptUser()
          .then((data) =>{
           fs.writeFile('README.md',generateMarkdown(data), (err) =>
           err ? console.log(err) : console.log('Success wrote to readme!')
           );
           
         });
        
        }
        // TODO: Create a function to initialize app
        init();
     module.exports = generateMarkdown;  
        
        
        
        

      
    

