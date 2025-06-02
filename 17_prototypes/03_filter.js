/*
filter() 
i/p => function(value)
o/p = > new array 
*/

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(fn){
        const arr = this
        const ans = []
        for(let i=0; i<arr.length; i++){
            if(fn(arr[i]))
                ans.push(arr[i])
        }
        return ans
    }
}


const arr = [1,2,3,4,5,6,7,8]
const filteredArray = arr.myFilter((val)=>{
    return val%2==0
})
console.log(filteredArray);




