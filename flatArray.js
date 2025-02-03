function flat(arr, depth = 1) {
  let result = [];
  arr.forEach(item => {
    if(Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1));
    } 
    else result.push(item);
  });
  return result;
}


const flatten = (nested) => {
  const flat = [];
  const handleFlat = (array) => {
    let counter = 0
    while (counter < array.length) {
      const val = array[counter];
      if (Array.isArray(val)) {
        handleFlat(val);
      } else {
        flat.push(val)
      }
      counter++;
    }
  }
  handleFlat(nested);
  return flat;
}
