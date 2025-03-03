function curry(fn) {
  return function curried(...args) {
    // if number of arguments match
    if (args.length >= fn.length) {
      return fn.call(this, ...args)
    } 
    return function(...missingArgs) {
      return curried.call(this, ...args, ...missingArgs)
    }
  }
}


function sum(a){
    
    return function inner(b){
        if(!b){
            return a
        } else{
           return sum(a+b)
        }
    }
}


console.log(sum(1)(2)(3)(4)(5)(6)(8)())
