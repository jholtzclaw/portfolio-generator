// allows use of inquirer
const inquirer = require('inquirer')
// imports writeFile functions
const writeFile = require('./utils/generateMarkdown')
// imports markdown functions
const generateReadme = require('./utils/markdownTemplate')
// function to users to enter information
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Please, enter your project title.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your project description.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide steps required to install your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter installation steps!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and possible uses for your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter instructions and uses!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter your collaborators and other assets used to complete your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your collaborators!')
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please, select your license?',
            choices: [
                'Apache', 
                'BSD',  
                'GPL', 
                'LGPL', 
                'MIT',
                'MPL',
                'CDDL',
                'EPL'
                ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide instructions on how to contribute.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter how to contribute!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide your tests.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter available tests!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter GitHub username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an email address.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!')
                    return false;
                }
            }
        }
    ])
}

// call to run the program
promptUser()
//.then(answers => console.log(answers))
// pulls the data
.then(projectData => {
     return generateReadme(projectData);
})
//writes the file
.then(pageMarkdown => {
    return writeFile(pageMarkdown)
})
.then(writeFileResponse => {
    console.log(writeFileResponse)
})
//catches errors
.catch(err => {
    console.log(err)
})