let {FirstOrderLinearRegression} = require('./utils');

let {RawData} = require('./datatest');
let Data = [];
for(let i = 0 ; i < RawData.length; i++){
    Data.push([RawData[i].Age,RawData[i].Pressure]);
}

console.log(Data)
console.log(FirstOrderLinearRegression(Data , 0.0001,5000))