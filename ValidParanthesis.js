// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
    let stack = [];
    let params = '() [] {}';
    let i =0
    
    while(i<s.length){
        stack.push(s[i])
        i++
      let open = stack[stack.length-2];
      let close = stack[stack.length-1];
      let correctParam = open+close;
     
      if(params.includes(correctParam)){
        stack.pop();
        stack.pop();
      }
        
    }
  return stack.length ===0
    
};
console.log(isValid('{()}'),"response")