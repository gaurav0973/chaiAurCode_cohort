console.log("Sum module calculated");
let x = "Kya haal hai"
function calculateSum(a,b){
    let sum = a + b
    console.log(sum);
}

//👋M1 => jo export kiya that is an object
// module.exports = {
//     x : x,
//     calculateSum : calculateSum
// }

//👋M2 can also be exported directly
// module.exports = {x,calculateSum}


//👋M3 => module.exports => empty object
// module.exports.x = x
// module.exports.calculateSum = calculateSum
module.exports.thisisX= x
module.exports.thisIsSum = calculateSum


