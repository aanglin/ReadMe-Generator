// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = ''; 
          if(license === 'MIT license') {
           licenseType = '![Github license](https://img.shields.io/badge/license-MIT-blue.svg)'
          } else if (license === 'GPL v3.0') {
           licenseType = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
          } else if (license === 'Apache License 2.0') {
           licenseType = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
          } else {
            licenseType = ''
        }
        console.log(licenseType)     
        return licenseType
        }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLinks = '';
  if(license === 'MIT license'){
  licenseLinks=   '![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)' 
} else if(license === 'Boost Software License'){            
     licenseLinks = 'https://www.gnu.org/licenses'
}  else if(license === 'Apache License 2.0'){ 
    licenseLinks =  'https://www.apache.org/licenses/License-2.0'
}else{ 
  licenseLinks = ''
}
console.log(licenseLinks)
return licenseLinks;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
      let licenseSection = ''
      if(license === 'None'){
          licenseSection = ''
      }else {
          licenseSection = `liscense: ${license}`
      }
      console.log(licenseSection)
      return licenseSection;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown({title,description,installation,usage,license,contributions,test,questions}) {
  return `
#   ${title}
##  ${renderLicenseSection(license)} ${renderLicenseBadge(license)}
##  ${renderLicenseLink(license)}
#   Description

      ${description}
      
#   Table of Contents
*   [Installation](#installation)
*   [Usage](#usage)
*   [License](#license)
*   [Contribution](#contribution)
*   [Test](#test)
*   [Questions](#questions)
#   Installation
      ${installation}
#  Usage
      ${usage}
#   License
     This project is licensed under the ${license} license
     ![Github license](${license})    
#   Contribution
      ${contributions}
#    Test
     You will need the following to run the test: ${test}
#   Questions
     If you have any questions about the repo or to open an issue, you can contact me at: 
###  Github: [${questions.git.trim().toLowerCase()}](https://github.com) 
###  Email:  [${questions.email.trim().toLowerCase()}](${questions.email})  

`;
}

module.exports = generateMarkdown;
