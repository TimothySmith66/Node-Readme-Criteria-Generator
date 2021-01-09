// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if( === "")
  else()
}
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if( ==="" );
  else( )
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {},

// TODO: Create a function to generate markdown for README

module.exports = generateMarkdown;
function generateMarkdown(userResponses, userInfo) {

  // Generate Table of Contents
  let draftToC = `## Table of Contents`;

  if (userResponses.install !== '') { TOC += `
  * [install](#install)` };

  if (userResponses.usage !== '') { TOC += `
  * [usage](#usage)` };

  if (userResponses.contribute !== '') { TOC += `
  * [contribute](#contribute)` };

  if (userResponses.tests !== '') { TOC += `
  * [tests](#tests)` };

  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *""* 
  
  ${userResponses.description}
  `

  // Table of Contents for markdown
  draftMarkdown += draftTOC;
 
  // Add License to TOC
  draftMarkdown += `
  * [license](#license)`;
  

  // Optional Installation section
  if (userResponses.install !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation

  
  ${userResponses.installation}`
  };
  

  // Usage
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  ${userResponses.usage}`
  };