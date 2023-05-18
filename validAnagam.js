let char ="ana";
let char1 ="aaan"

const validAnagram =(str,str1)=>{
    let map ={};
    for(let i =0; i<str.length; i++){
        let letter = str[i]
        if(!map[letter]){
            map[letter]=1;
        }else{
            map[letter]++
        }
    }

    for(let j =0; j<str1.length;j++){
        let letter = str1[j]
        if(!map[letter]){
            return false
        }
        if(map[letter]<1){
            return false
        }
        map[letter]--
    }
return true;
}

let res = validAnagram(char,char1);
console.log(res,"result")