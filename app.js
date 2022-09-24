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
        {   // type of programs used
            type: 'checkbox',
            name: 'programsUsed',
            message: 'Which of the following programs have you used?',
            choices: ['HTML5', 'CSS3', 'Javascript', 'Python', 'SQL', 'ExpressJS', 'React', 'Node.js', 'MongoDB', 'GraphQL', 'MUI', 'Apollo GraphQL', 'Handlebars.js', 'AngularJS', 'Heroku', 'TailwindCSS', 'BootStrap'],
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

        if (!readmeData.program) {
            readmeData.program = [];
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
        else {
            licenseInformation = {
                licenseInfo: 'The software ineligible for copying, modifying, or distribution.',
            }
            readmeData.license.push(licenseInformation);
        }

        if (projectData.programsUsed.indexOf('HTML5') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white',
                alt: 'HTML5 Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('CSS3') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white',
                alt: 'CSS3 Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('Javascript') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/JavaScript-000000?style=flat&logo=javascript&logoColor=323330',
                alt: 'Javascript Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('Python') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=000000',
                alt: 'Python Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('SQL') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/SQL-AEB0B5?style=flat',
                alt: 'SQL Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('ExpressJS') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/Express.js-white?style=flat&logo=express&logoColor=black',
                alt: 'ExpressJS Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('React') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB',
                alt: 'React Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('Node.js') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white',
                alt: 'Node.JS Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('MongoDB') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white',
                alt: 'MongoDB Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('GraphQL') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/GraphQL-171e26?style=flat&logo=GraphQL&logoColor=e10098',
                alt: 'GraphQL Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('MUI') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/MUI-0A1929?style=flat&logo=MUI&logoColor=007FFF',
                alt: 'MUI Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('Apollo GraphQL') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/Apollo%20GraphQL-white?style=flat&logo=ApolloGraphQL&logoColor=311C87',
                alt: 'Apollo GraphQL Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('Handlebars.js') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/HandlebarsJS-orange?style=flat',
                alt: 'Handlebars.JS Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('AngularJS') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/AngularJS-red?style=flat',
                alt: 'AngularJS Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('Heroku') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/Heroku-blueviolet?style=flat',
                alt: 'Heroku Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('TailwindCSS') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/TailwindCSS-9cf?style=flat',
                alt: 'TailwindCSS Badge',
            };
            readmeData.program.push(program);
        }
        if (projectData.programsUsed.indexOf('BootStrap') !== -1) {
            program = {
                url: 'https://img.shields.io/badge/Bootstrap-blueviolet?style=flat',
                alt: 'BootStrap Badge',
            };
            readmeData.program.push(program);
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


    