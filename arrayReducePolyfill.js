const arr = [1,2,3,4,5,6,7,8]

Array.prototype.myReduce = function(callback,initialvalue){
    
    let accum = initialvalue;
   for(let i =0; i<this.length;i++){
       if(accum){
           accum = callback(accum,this[i],i,this)
       } else{
           accum = this[i]
       }
   }
   return accum
}

let result = arr.myReduce((accum,item,i,arr)=>accum+item)
console.log(result,"res")
