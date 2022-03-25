const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./src/readme-template.js');

const userPrompt = () => {
    console.log(`
    =================

    Describe Yourself
    
    =================
    `);



    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
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
        } 
    ])
}

const readmePrompt = readmeData => {
    console.log(`
    =====================

    Describe Your Project
    
    =====================
    `);

    // If there's no 'projects' array property, create one
    if (!readmeData.projects) {
        readmeData.projects = [];
    }

return inquirer
    .prompt ([
        {   // name of the readme
            type: 'input',
            name: 'readmeName',
            message: 'What is the name of your project?'
        },
        {   // type of software license
            type: 'list',
            name: 'readmeLicense',
            message: 'What license is this software governed under?',
            choices: ['Public Domain License', 'LGPL', 'Permissive', 'Copyleft', 'Proprietary']            
        }, 
        {   // description of the readme
            type: 'input',
            name: 'readmeDesc',
            message: 'What is the description for your project?'
        }, 
        {   // installation instructions
            type: 'input',
            name: 'readmeInstall',
            message: 'How does someone install your project?'
        }, 
        {   // usage information
            type: 'input',
            name: 'readmeUsage',
            message: 'What does your project do?'
        }, 
        {   // contribution guidelines
            type: 'input',
            name: 'readmeContribute',
            message: 'What are the contribution guidelines for your project?'
        }, 
        {   // test instructions
            type: 'input',
            name: 'readmeTest',
            message: 'How do you test this project?'
        },
    ])
    .then(projectData => {
        readmeData.projects.push(projectData);
        return readmeData;
    })
}

userPrompt()
    .then(readmePrompt)
    .then(readmeData => {        
        const pageMD = generateREADME(readmeData);

        fs.writeFile('./readme.md', pageMD, err => {
           if (err) throw new Error(err);
           console.log('Readme created! Check out readme.MD in this directory to see it!');
        });
    });


    