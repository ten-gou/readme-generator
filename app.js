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
            choices: ['Public Domain License', 'Lesser General Public License', 'Permissive', 'Copyleft', 'Proprietary'],
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
        {   // Notice of Bugs
            type: 'input',
            name: 'readmeBug',
            message: 'Are there any bugs that a user needs to be aware of?'
        }
    ])
    .then(projectData => {
            // If there's no 'projects' array property, create one
        if (!readmeData.license) {
            readmeData.license = [];
        }

        if (projectData.readmeLicense = 'Public Domain License') {
            licenseInformation = {
                licenseInfo: 'Anyone is free to use and modify this software without restrictions.',
            }
            readmeData.license.push(licenseInformation);
        }
        else if (projectData.readmeLicense = 'Lesser General Public License') {
            licenseInformation = {
                licenseInfo: 'Under an LGPL license, developers have rights to link to open source libraries within their own software. Resulting code can be licensed under any other type of license – even proprietary – when projects are compiled or linked to include an LGPL-licensed library. The caveat is that if any part of the library is copied into the code or modified, the terms of the original LGPL license will apply to the developed code that is used in the library.',
            }
            readmeData.license.push(licenseInformation);
        }
        else if (projectData.readmeLicense = 'Permissive') {
            licenseInformation = {
                licenseInfo: 'Few restrictions or requirements for the distribution or modification of the woftware may apply.',
            }
            readmeData.license.push(licenseInformation);
        }
        else if (projectData.readmeLicense = 'Copyleft') {
            licenseInformation = {
                licenseInfo: 'Restrictive- known otherwise as a reciprocal license. The licensed code may be modified or distributed as part of a software project if the new code is distributed under the same software license.',
            }
            readmeData.license.push(licenseInformation);
        }
        else if (projectData.readmeLicense = 'Proprietary') {
            licenseInformation = {
                licenseInfo: 'The software ineligible for copying, modifying, or distribution.',
            }
            readmeData.license.push(licenseInformation);
        }


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


    