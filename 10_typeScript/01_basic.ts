let x: number = 10
console.log(typeof x)
let y: number | boolean  = 30
console.log(typeof y)

// TypeScript allows you to use the union type to define a variable that can hold multiple types of values.
let z: string | number | boolean = "hello"
console.log(typeof z)

// functions
function add(x:number, y:number){
    return x + y
}
let result: number = add(5,6)


function createUser(user : {firstName : string; lastName ?: string})
{ 
    user.firstName
    user.lastName  
}














