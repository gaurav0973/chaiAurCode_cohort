// lets create custom map function
// map -> foe every element callback ok call karna and return a new array 
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callBack){
        let ans = []
        for(let i=0; i<this.length; i++){
            let value = callBack(this[i], i)
            ans.push(value)
        }
        return ans;
    }
}

let arr = [2, 3, 4, 5]
let trippled_arr = arr.myMap((num, i)=> 3 * num)
console.log(trippled_arr)