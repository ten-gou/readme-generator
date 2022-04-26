module.exports = (readmeData) => {
    console.log(readmeData)
    const {
        name,
        github,
        email,
        license:[{
            licenseInfo,
        }],
        projects:[{
            readmeName, readmeLicense, readmeDesc, readmeInstall, readmeUsage, readmeContribute, readmeTest, readmeBug
        }]
    } = readmeData
    return `
# ${readmeName}
Made by ${name}, this program is considered to be under ${readmeLicense}.

## Table of Contents
[*1. Description*](#1-description)

[*1-1. Picture Examples*](#1-1-picture-examples)

[*1-2. Known Bugs*](#1-2-known-bugs)

[*1-3. License Information*](#1-3-license-information)

[*2. Installation Instructions*](#2-installation-instructions)

[*3. Usage Information*](#3-usage-information)

[*4. Contribution Guidelines*](#4-contribution-guidelines)

[*5. Testing Instructions*](#5-testing-instructions)

[*6. Questions*](#6-questions)


## 1. Description
${readmeDesc}

### 1-1. Picture Examples

### 1-2. Known Bugs
${readmeBug}

### 1-3. License Information
${licenseInfo}

## 2. Installation Instructions
${readmeInstall}

## 3. Usage Information
${readmeUsage}

## 4. Contribution Guidelines
${readmeContribute}

## 5. Testing Instructions
${readmeTest}

## 6. Questions
Have any questions? Contact me, using the points of contact provided below:

**GITHUB ACCOUNT:** ${github}

**GITHUB LINK:** https://www.github.com/${github}

**EMAIL:** ${email}
    `;
};