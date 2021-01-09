// TODO: Include packages needed for this application
// const inquirer = require('inquirer.js');
var inquirer = require('inquirer');
const fs = require('fs');
const prompt = require("./prompt.js");
 
//const markdown = require('generateMarkdown.js');

// TODO: Create an array of questions for user input
//const questions = [];  
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
        },
        { 
            type: "input",
            message: "If required state how your appiclation should be installed",
            name: "license",
        },
        { 
            type: "checkbox",
            message: "state whether or not you are open to contributors:",
            name: "contribute",
            choices: ["Yes", "no",]
        },
        
        
        {
            type: 'checkbox',
            message: 'choose your badge',
            name: 'choices',
            choices: [
                "GNU AGPLv3", "Mozilla Public License 2.0", "The Unlicense"
      ]
    },
        {
            type: "input",
            message: "state tests to check code:",
            name: "tests",
        },
    {
        type: "input",
        message: "What questions do you have for the application created?",
        name: "usage",
    },
  ])
  // Arrow function to state whether criteria worked or not.
    .then((response) =>
        prompt.confirm === prompt.password
            ? console.log('Success!')
            : console.log('review criteria then try again')
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
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
