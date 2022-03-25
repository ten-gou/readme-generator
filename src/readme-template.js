module.exports = (readmeData) => {
    console.log(readmeData)
    const {
        name,
        github,
        email,
        projects:[{
            readmeName, readmeDesc, readmeInstall, readmeUsage, readmeContribute, readmeTest
        }]
    } = readmeData
    return `
# ${readmeName}
by ${name}

## Table of Contents
TOC element

### Description
${readmeDesc}

### Installation Instructions
${readmeInstall}

### Usage Instructions
${readmeUsage}

### Contibution Guidelines
${readmeContribute}

### Testing Instructions
${readmeTest}

#### Contact Me
${github}
${email}

    `;
};