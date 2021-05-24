//We create the fuction that give us the temperture we want to calculate and update the state whit this value
function calculateTemp(source,leftValue,from,to){
    if(from === "Celcius" && to === "Celcius") return leftValue;
    else if(from === "Celcius" && to === "Fahrenheit") return leftValue*9/5 + 32;
    else if(from === "Celcius" && to === "Kelvin") return leftValue + 273.15;

    else if(from === "Fahrenheit" && to === "Celcius") return 5/9*(leftValue - 32);
    else if(from === "Fahrenheit" && to === "Fahrenheit") return leftValue;
    else if(from === "Fahrenheit" && to === "Kelvin") return 5/9*(leftValue - 32) + 273.15;

    else if(from === "Kelvin" && to === "Celcius") return leftValue -273.15;
    else if(from === "Kelvin" && to === "Fahrenheit") return (leftValue - 273.15)*9/5 + 32
    else if(from === "Kelvin" && to === "Kelvin") return leftValue;
}

function update(model,source,leftValue,from,to){
    if(source === "Yes" || source === "yes" || source === "Y" || source === "y"){
        return{
            leftValue: leftValue,
            leftUnit: from,
            rightValue: calculateTemp(source,leftValue,from,to),
            rightUnit: to,
            temperatureValue: leftValue
        }
    }

    else if(source === "No" || source === "no" || source === "N" || source === "n"){
        return{
            leftValue: calculateTemp(source,leftValue,from,to),
            leftUnit: to,
            rightValue: leftValue,
            rightUnit: from,
            temperatureValue: leftValue
        }
    }

}
module.exports={
    update
}