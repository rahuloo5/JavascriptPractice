var wordPattern = function(pattern, s) {
  s = s.split(" ");
  let map = new Map();

  if(pattern.length!==s.length){
    return false;
  }

for(let i =0; i<pattern.length;i++){

    if(map.has(pattern[i])){

        if(s[i]!==map.get(pattern[i])){
            return false
        }
    } else {

const values = [...map.values()];
if(values.includes(s[i])){
    return false
}
map.set(pattern[i],s[i])

    }
}

return true
};


