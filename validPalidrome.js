 let str ="a race where car runs !";
 let str2 =" "

const clean=(str)=>{
    let char ="abcdefghijklmnopqrstuvwxyz0123456789";
    let newChar="";

    for(let i =0; i<str.length;i++){
        if(char.indexOf(str[i]!==-1)){
            newChar+=str[i]
        }
    }
    return newChar;
}
 const checkValidPalidrome=(str)=>{

    let cleanStr = clean(str);
let left = 0;
let right = cleanStr.length-1;
while(left<right){
    if(cleanStr[left]!==cleanStr[right]){
        return false
    }
    left++;
    right--;
}
return true
 }

 let res = checkValidPalidrome(str2);
 console.log(res,"result")