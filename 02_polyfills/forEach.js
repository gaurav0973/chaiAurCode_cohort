// create custom forEach loop

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback){
        for(let i=0; i<this.length; i++){
            callback(this[i], i)
        }
    }
}

let arr = [3,5,6,8]
arr.myForEach((num)=> console.log(num))