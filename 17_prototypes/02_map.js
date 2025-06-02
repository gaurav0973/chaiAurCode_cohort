/*
arr.map((value, index)=> {
        value*3
    })

i/p => function(value, index)
o/p => array 
*/
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(fn){
        const arr = this
        const ans = []
        for(let i=0; i<arr.length; i++){
            const val = fn(arr[i], i);
            ans.push(val)
        }
        return ans;
    }
}

const arr = [1,2,3]
const doubleArray = arr.myMap((val)=>val*3)
console.log(doubleArray);
