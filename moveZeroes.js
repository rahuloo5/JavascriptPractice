function moveZeros(list) {
  // your code here
    let count=0
  for(let i =0;i<list.length;i++){
    if(list[i]!==0){
      list[count] =list[i];
      count++
    }
  }

for(let j =count; j<list.length;j++){
  list[j]=0
}
console.log(list)
}

const list = [1,0,0,2,3]
console.log(moveZeros(list) )


---------------------------------------------

  function moveZeros(list) {
  // your code here
  let res = new Array(list.length).fill(0);
  let count=0
  for(let i =0;i<list.length;i++){
    if(list[i]!==0){
      res[count] =list[i];
      count++
    }
  }
  console.log(res)
  return res
}
