const {initModel} = require('./model');
const {update} = require('./update');
const {view} = require('./view');
const {app} = require('./app');

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state,update,view);
/*
if(typeof a === "number") console.log("caca");
*/