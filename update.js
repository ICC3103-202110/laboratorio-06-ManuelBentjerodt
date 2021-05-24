function rightValueF(source,leftValue,from,to){
    if(source === "Yes" || source === "yes" || source === "Y" || source === "y"){
        if(from === "Celicius" && to === "Celcius") return leftValue;
        else if(from === "Celcius" && to === "Fahrenheit") return leftValue*9/5 + 32;
        else if(from === "Celcius" && to === "Kelvin") return leftValue + 273.15;

        else if(from === "Fahrenheit" && to === "Celcius") return 5/9*(leftValue - 32);
        else if(from === "Fahrenheit" && to === "Fahrenheit") return leftValue;
        else if(from === "Fahrenheit" && to === "Kelvin") return 5/9*(leftValue - 32) + 273.15;

        else if(from === "Kelvin" && to === "Celcius") return leftValue -273.15;
        else if(from === "Kelvin" && to === "Fahrenheit") return (leftValue - 273.15)*9/5 + 32
        else if(from === "Kelvin" && to === "Kelvin") return leftValue;

    }
    else if(source === "No" || source === "no" || source === "N" || source === "n"){
        if(from === "Celicius" && to === "Celcius") return leftValue;
        else if(from === "Celcius" && to === "Fahrenheit") return 5/9*(leftValue - 32);
        else if(from === "Celcius" && to === "Kelvin") return leftValue -273.15;

        else if(from === "Fahrenheit" && to === "Celcius") return leftValue*9/5 + 32;
        else if(from === "Fahrenheit" && to === "Fahrenheit") return leftValue;
        else if(from === "Fahrenheit" && to === "Kelvin") return (leftValue - 273.15)*9/5 + 32;

        else if(from === "Kelvin" && to === "Celcius") return leftValue + 273.15;
        else if(from === "Kelvin" && to === "Fahrenheit") return 5/9*(leftValue - 32) + 273.15;
        else if(from === "Kelvin" && to === "Kelvin") return leftValue;

    }
}

function update(model,source,leftValue,from,to){
    if(source === "Yes" || source === "yes" || source === "Y" || source === "y"){
        return{
            ...model,
            leftValue: leftValue,
            leftUnit: from,
            rightValue: rightValueF(source,leftValue,from,to),
            rightUnit: to,
            temperatureValue: leftValue

        }
    }
    else if(source === "No" || source === "no" || source === "N" || source === "n"){
        return{
            ...model,
            leftValue: rightValueF(source,leftValue,from,to),
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