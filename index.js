const {initModel} = require('./model');
const {update} = require('./update');
const {view} = require('./view');
const {app} = require('./app');

const state = {
    model: initModel,
    currentView: view(initModel)
}


let a = 10;

app(state,true,true);
/*
if(typeof a === "number") console.log("caca");
*/