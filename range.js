 function range(from, to) {
  // return the result array
  const result = []
  while (from <= to) {
    result.push(from++)
  }
  return result
}


function * range(from, to) {
  while (from <= to) {
    yield from++
  }
}

let value = range(1,5);

for(let instance of value){
    console.log(instance)
}
