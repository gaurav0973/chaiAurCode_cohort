//Problem: Create an object representing a type of tea with properties for name, type and caffeine content
const teas = {
    name : "Lemon Tea",
    type : "Green",
    caffeine : "low"
}

//Problem: Access and print the name and type properties of the tea object


// console.log(teas.name);
// console.log(teas.name);



//Problem: Add a new property origin to the tea object

// teas.origin = "Assam"
// console.log(teas);






// Problem: Change the caffeine level of the tea object to "Medium"

// teas.caffeine = "Medium"
// console.log(teas);



// Problem: Remove the type property from the tea object

// delete teas.type
// console.log(teas);



// Problem: Check if the tea object has a property origin

// console.log("origin" in teas);
// console.log(teas.hasOwnProperty("type"));




// Problem: Use a for...in loop to print all properties of the tea object

for (const key in teas) {
    console.log(`${key} : ${teas[key]}`);
}


// Problem: Create a nested object representing different types of teas and their properties

// const myTeas = {
//     greentea : {
//         name : "Green Tea"

//     },
//     blacktea : {
//         name : "Black Tea"
//     }
// }

// Problem: Create a copy of the tea object


// Problem: Add a custom method describe to the tea object that returns a description string

// Problem: Merge two objects representing different teas into one
