const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const files       = require('./lib/files');
const inquirer  = require('./lib/inquirer');
const CLI         = require('clui');
const Spinner     = CLI.Spinner;

clear();
console.log('\n\n',
  chalk.yellow(
    figlet.textSync('__  CRW  __', { horizontalLayout: 'full' }),
  ), '\n\n'
);

// if (files.directoryExists('.git')) {
//     console.log(chalk.red('Already a git repository!'));
//     process.exit();
//   }

  const run = async () => {
    const credentials = await inquirer.askGithubCredentials();
    console.log(credentials);
  }
  
//   run();

  const status = new Spinner('Authenticating you, please wait...');
status.start();