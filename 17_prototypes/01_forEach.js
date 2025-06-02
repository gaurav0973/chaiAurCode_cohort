// forEach
// Signature : 
// forEach => function
// i/p => function(value, index)
// o/p => nothing
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(fn){
        const arr = this
        for(let i=0; i<arr.length; i++){
            fn(arr[i], i);
        }
    }
}

const arr = [1,2,3,4]
const ans = arr.myForEach((value, index)=>{
    console.log(`value : ${value} at index = ${index}`)
})