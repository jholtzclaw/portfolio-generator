// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${displayBadge(data.license)}

## Description

${data.description}
`;
}


function displayBadge(license) {
  if(license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ``
}

module.exports = generateMarkdown;
