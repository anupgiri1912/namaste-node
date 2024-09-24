//modules are protected their variables and functions from leaking
console.log("sum module executed");
var x = "hello world";

function calculatedSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = {
  x,
  calculatedSum,
};
