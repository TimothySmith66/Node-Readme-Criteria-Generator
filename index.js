// TODO: Include packages needed for this application
// const inquirer = require('inquirer.js');
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
//const questions = [];
//sections  Installation, Usage, License, Contributing, Tests, and Questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'write a description:',
            name: 'description',

        },
        {
            type: "input",
            message: "table of contents",
            name: "TOC",
        },
        {
            type: "input",
            message: "installation:",
            name: "install",
        },

        {
            type: 'checkbox',
            message: 'What is your preferred method of communication?',
            name: 'choices',
            choices: [
                (page), fax, (love)
      ]
    },
  ])
    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
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
    writeToFile("output/README.md", "readme markdown sting");
}

// Function call to initialize app
init();
