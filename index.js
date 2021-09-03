// Node modules
const inquirer = require('inquirer');
const fs = require('fs');


const generateReadme = ({ title, description, installation, usages, contribution, tests, license, git, linkedin, email }) => {
return `# Title of your project
${title}


## Description
${description
        }

## Installation
${installation
        }

## Usages
${usages
        }

## Contribution
${contribution
        }

## Tests
${tests
        }

## License
${license
        }

## Git
${git
        }

## Linkedin
${linkedin
        }

## E-mail
${email
        }`
}

// inquire to generate questions arrays
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    
    {
        type: 'input',
        name: 'usages',
        message: 'How do you use your app?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Would you like other developers to contribute it?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide code examples and how to reun them.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
    },
    {
        type: 'input',
        name: 'git',
        message: 'Github URL:',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'LinkedIn URL:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'E-mail:',
    },
]).then((answers) => {
    const readmePageContent = generateReadme(answers);

   
    fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
    );
});