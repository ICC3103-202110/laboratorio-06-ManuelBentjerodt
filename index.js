//This is the main code, we import some modules, create the state, and call the app
const {initModel} = require('./model');
const {update} = require('./update');
const {view} = require('./view');
const {app} = require('./app');

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state,update,view);