function removeDuplicates(str){
    //hello world
    
    let newStr = str.split("");
   const noDuplicateItems = newStr.reduce((accumulator, item) => {
  if (!accumulator.includes(item)) {
    accumulator.push(item);
  }
  return accumulator;
}, []);

let res = noDuplicateItems.join("")

console.log(res,"nodup");
}

removeDuplicates("hello world")
