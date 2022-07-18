// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = ''; 
          if(licenseType === 'MIT') {
           licenseType = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
          } else if (licenseType === 'Boost Software License') {
           licenseType = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
          } else if (license === 'Apache License 2.0') {
           licenseType = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
          } else {
            licenseType = ''
          }
          return licenseType
        }
                

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLinks = '';
  if(license === 'MIT'){
      'https://img.shields.io/badge/License-MIT-yellow.svg' 
} else if(license === 'Boost Software License'){            
      'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
}  else if(license === 'Apache License 2.0'){ 
      'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
}else{ 
  licenseLinks = ''
}
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
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title,description,installation,usage,license,contributions,test,questions}) {
  return `# ${title}
  ## ${renderLicenseSection(license)} ${renderLicenseBadge(license)}
  ## ${renderLicenseLink(license)}
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
     This project is licensed under the ${license} license
     ![Github License](${license})    
  # Contribution
      ${contributions}
  # Test
     You will need the following to run the test: ${test}
  # Questions
     If you have any questions about the repo or to open an issue, you can contact me at: 
      * Github: [${questions.git.trim().toLowerCase()}](https://github.com) 
      * Email:  [${questions.email.trim().toLowerCase()}](${questions.email})  

`;
}

module.exports = generateMarkdown;
