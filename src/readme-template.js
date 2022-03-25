module.exports = (readmeData) => {
    console.log(readmeData)
    const {
        name,
        github,
        email,
        projects:[{
            readmeName, readmeLicense, readmeDesc, readmeInstall, readmeUsage, readmeContribute, readmeTest
        }]
    } = readmeData
    return `
# ${readmeName}
by ${name} under ${readmeLicense}

## Table of Contents
[*1. Description*](#description)
[*1-1. Picture Examples*](#picture-examples)
[*1-2. License Information*](#license-information)
[*2. Installation Instructions*](#installation-instructions)
[*3. Usage Information*](#usage-information)
[*4. Contibution Guidelines*](#contribution-guidelines)
[*5. Testing Instructions*](#testing-instructions)
[*6. Contact Me*](#contact-me)


### Description
${readmeDesc}

#### Picture Examples

#### License Information

### Installation Instructions
${readmeInstall}

### Usage Information
${readmeUsage}

### Contibution Guidelines
${readmeContribute}

### Testing Instructions
${readmeTest}

### Contact Me
**GITHUB LINK:** https://www.github.com/${github}

**EMAIL:** ${email}
    `;
};