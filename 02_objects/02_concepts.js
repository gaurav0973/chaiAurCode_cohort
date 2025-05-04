// console.log("Quokka : Ctrl+K then J");
console.log(4+5);
const p1 = {
    name : "John",
    age : 20
}
const p2 = {
   name : p1.name,
   age : p1.age
}

console.log(p1);
console.log(p2);

// same cheej karne ke shortCut -> spreadout operator (3 dots)
const p3 = {...p2};
console.log(p3);

p3.name = "gaurav"
console.log(p3);
console.log(p2);


// problem with spreadout operator
const obj = {
    name : "Gaurav",
    age : 20,
    address : {
        city : "Varanasi",
        state : "Uttar Pradesh"
    }
}

const newObj = {...obj};
console.log(obj);
console.log(newObj);

newObj.name = "Monu"
console.log(newObj);
console.log(obj);


// reflected in both objects => why => spreadout operatore do  shallow copy => at the fisrt level => only one level -> nested object or nested array =>> same behaviour 
newObj.address.city = "Delhi"
console.log(newObj);
console.log(obj);



// deep copy  -> spreadout operator at higher levels
const obj2 = {...obj, address : {...obj.address}}
console.log(obj2);


// deep copy => consept od scelirisationa and deserelisation is used
const obj2KaString = JSON.stringify(obj)
const obj3 = JSON.parse(obj2KaString);
console.log(obj3);





