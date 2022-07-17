// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let licenseType = license.license; 
//           let yourLicense = ''
//           if(licenseType === 'MIT') {
//            return yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
//           } else if (licenseType === 'Boost Software License') {
//            return yourLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
//           } else if (licenseType === 'Apache License 2.0') {
//            return yourLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
//           } else {
//             return license.license = "N/A"
//           }
//         }
//         renderLicenseBadge();        

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   const licenseLinks = {
//     mit:  '[MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',             
//   boost:  '[Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
//     apache: '[Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
//   }
//  return licenseLinks[license]
// }
// renderLicenseLink(license);
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title,description,installation,usage,license,contributions,test,questions}) {
  return `# ${title}
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
