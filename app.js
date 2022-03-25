const inquirer = require('inquirer');
const fs = require('fs');
const README = require('./src/readme-template.js');

const userPrompt = () => {
    console.log(`
    =================

    Describe Yourself And Your Project
    
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        },
        {   // name of the readme
            type: 'input',
            name: 'readme-name',
            message: 'What is the name of your project?'
        }, 
        {   // description of the readme
            type: 'input',
            name: 'readme-desc',
            message: 'What is the description for your project?'
        }, 
        {   // installation instructions
            type: 'input',
            name: 'readme-install',
            message: 'How does someone install your project?'
        }, 
        {   // usage information
            type: 'input',
            name: 'readme-usage',
            message: 'What does your project do?'
        }, 
        {   // contribution guidelines
            type: 'input',
            name: 'readme-contribute',
            message: 'What are the contribution guidelines for your project?'
        }, 
        {   // test instructions
            type: 'input',
            name: 'readme-test',
            message: 'How do you test this project?'
        }, 
    ])
}

userPrompt()
    .then(answers => console.log(answers))

// fs.writeFile('./README.md', generateREADME, err => {
//    if (err) throw new Error(err);
//
//    console.log('Portfolio complete! Check out index.html to see the output!');
//  });