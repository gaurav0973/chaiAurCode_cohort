
//👋M1 => jo export kiya that is an object
// const obj = require("./sum.js")
// console.log("Present in App.js File");
// console.log(obj.x)
// obj.calculateSum(4,6)


//👋M2 => object destructuring
// const {x, calculateSum} = require("./sum.js")
// console.log("Present in App.js File");
// console.log(x)
// calculateSum(4,6)



const {thisisX, thisIsSum} = require("./sum.js")
console.log("Present in App.js File");
console.log(thisisX)
thisIsSum(4,6)



