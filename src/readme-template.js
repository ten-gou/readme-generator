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
            readmeName, readmeLicense, readmeDesc, readmeInstall, readmeUsage, readmeContribute, readmeTest
        }]
    } = readmeData
    return `
# ${readmeName}
Made by ${name}, this program is considered to be under ${readmeLicense}.

## Table of Contents
[*1. Description*](#description)

    [*1-1. Picture Examples*](#picture-examples)

    [*1-2. License Information*](#license-information)

[*2. Installation Instructions*](#installation-instructions)

[*3. Usage Information*](#usage-information)

[*4. Contibution Guidelines*](#contribution-guidelines)

[*5. Testing Instructions*](#testing-instructions)

[*6. Questions*](#questions)


## 1. Description
${readmeDesc}

### 1-1. Picture Examples

### 1-2. License Information
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