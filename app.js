const {inputForm} = require('./view');
const {printTable} = require('console-table-printer');

function app(state, update, view){
    const {model, currentView} = state;
    const {title, table} = currentView;
    //printing the title and table
    console.clear();
    console.log(title);
    printTable(table);
    //asking user a new bill amount and tip percentage
    const input = await inputForm(model);
    //updating  our state calling the function update, first we update the model, then we can update our state
    const updateModel = update(input,model);
    state = {
        model: updateModel,
        currentView: view(updateModel)
    }

}