//we import some modules and parte of the code, we return the title and the table and ask user inputs we have to use
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { initModel } = require('./model');
const {printTable} = require('console-table-printer');

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

function getTable(model){
    return [
        {
        "leftValue": model.leftValue,
        "leftUnit": model.leftUnit,
        "rightValue": model.rightValue,
        "rightUnit": model.rightUnit
        }
    ]
}

function input(model){
    return inquirer.prompt([
        {
            name: "source",
            type: "input",
            message: "Left temperture is source?",
            default: "Yes/no",
            validate: function(value){
                if(value === "Yes" || value == "yes" || value === "Y" || value === "y") return true;
                else if(value === "No" || value == "no" || value === "N" || value === "n") return true;
                else return "Insert yes or no"

            }
        },
        {
            name: "temperatureValue",
            type: "number",
            message: "Temperature value to convert?",
            default: function(model){
                if(model.leftTemperature == "yes") return model.leftValue;
                else return model.rightValue;
                
            },
            validate: function(value){
                if(typeof value === "number") return true;
                else return "Enter a number" ;
            }
        },
        {
            name: "from",
            type: "list",
            message: "From?",
            choices: ["Celcius","Fahrenheit","Kelvin"]

        },
        {
            name: "to",
            type: "list",
            message: "To?",
            choices: ["Celcius","Fahrenheit","Kelvin"]

        }
    ])
}


function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    input
}