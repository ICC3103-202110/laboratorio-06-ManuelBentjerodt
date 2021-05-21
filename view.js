//we import some module for aesthetic reason and the init model for show
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { initModel } = require('./model');

//this function create the title
function getTitle(){
    return chalk.magenta(
        figlet.textSync(
            'Unit Convert App',
            {
                horizontalLayout: 'full',
                font: 'small'
            }
        )
    )
}

console.log(getTitle());
