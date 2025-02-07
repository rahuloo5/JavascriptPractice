function objectAssign(target, ...sources) {
  // your code here
  if (target === null || target === undefined) throw Error('target is not an object.');

  if(typeof target !== "Object"){
    target = Object(target)
  }
  for(let source of sources){
   if (source === null || source === undefined) continue;
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))

  }
  return target
}
