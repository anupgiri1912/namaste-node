require("./xyz.js");
// const obj = require("./sum.js");//used for obj import
//or we can use this structuring;
//const { x, calculatedSum } = require("./calculate/sum.js");
// const calculateMultiply = require("./calculate/multiply.js");
const { calculateMultiply, calculatedSum } = require("./calculate");
const data = require("./data.json");

var name = "Anup Giri";
var a = 10;
var b = 20;

// obj.calculatedSum(a, b);
// console.log(obj.x);

console.log(data);

calculatedSum(a, b);
// console.log(x);
calculateMultiply(a, b);
