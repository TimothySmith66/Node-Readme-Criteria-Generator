// TODO: Include packages needed for this application
// const inquirer = require('inquirer.js');
var inquirer = require('inquirer');
const fs = require('fs')
let data = 
//const markdown = require('generateMarkdown.js');

// TODO: Create an array of questions for user input
//const questions = [];
//sections  Installation, Usage, License, Contributing, , and Questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'name',
            //validate: function{
                
           // },
        },
        {
            type: 'input',
            message: 'write a description:',
            name: 'description',
            //validate: function{

            //},

        },
        { 
            type: "input",
            message: "If required state how your appiclation should be installed",
            name: "install",
        }
        {
            type: "input",
            message: "table of contents",
            name: "TOC",
        },
        {
            type: "input",
            message: "state tests to check code:",
            name: "tests",
        },

        {
            type: 'checkbox',
            message: 'What is your preferred method of communication?',
            name: 'choices',
            choices: [
                "page", "fax", "love"
      ]
    },
    {
        type: "input",
        message: "What questins do you have for the application created?",
        name: "questions",
    },
  ])
    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('review criteria then try again')
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`${response.name}.json`, data, (err) => {
        if (err){
        console.log("What happened? Error!");
    } else{
        console.log("You finished!");
    }
    
});
}

// TODO: Create a function to initialize app
function init() {
    // writes to readme file in the output directory 
    writeToFile("output/README.md", "readme markdown sting");


}

// Function call to initialize app
init();
