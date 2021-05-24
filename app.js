const {input} = require('./view');
const {printTable} = require('console-table-printer');

async function app(state, update, view){
    while(true){
        const {model, currentView} = state;
        const {title, table} = currentView;
        //printing the title and table
        console.clear();
        console.log(title);
        printTable(table);
        //asking user a new bill amount and tip percentage
        const {source,temperatureValue,from,to} = await input(model);
        //updating  our state calling the function update, first we update the model, then we can update our state
        const updateModel = update(model,source,temperatureValue,from,to);
        state = {
            model: updateModel,
            currentView: view(updateModel)
        }
    }

}

module.exports={
    app
}