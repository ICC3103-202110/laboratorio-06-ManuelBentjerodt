//This is the app, we import some parte of the code and create the app
const {input} = require('./view');
const {printTable} = require('console-table-printer');

async function app(state, update, view){
    while(true){
        const {model, currentView} = state;
        const {title, table} = currentView;
        
        console.clear()
        console.log(title);
        printTable(table);

        const {source,temperatureValue,from,to} = await input(model);
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