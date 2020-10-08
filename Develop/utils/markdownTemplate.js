
module.exports = data => {
    return `
# ${data.projectTitle}
  
## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description:
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
* ${data.description}
  
## Installation:
  
* ${data.installation}
  
## Usage:
  
* ${data.usage}
  
## Credits:
  
* ${data.credits}
  
## License:
  
To get more information about the licenses, see below.
* [License](https://opensource.org/licenses/)
## Contributing:
  
* ${data.contributing}
  
## Tests:
* ${data.tests}
## Questions:
  
For additional information visit my GitHub page:
* [GitHub Profile](https://github.com/${data.username})
For questions please send me an email at:
* ${data.email}
  `;
  }