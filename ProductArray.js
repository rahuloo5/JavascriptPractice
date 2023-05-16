const arr =[1,2,3,4,5]

const productOfArray=(arr)=>{
    let result =[];

    for(let i =0;i<arr.length; i++){
        let mul = 1;
        for(let j=0; j<arr.length;j++){
            
            if(i==j){
                continue;
            }else {
                
                 mul = mul*arr[j]
            }
           
        }
        result.push(mul)
    }
    console.log(result,"result")
}
//o(n2)

productOfArray(arr)


const optimiseProductofArray =(arr)=>{

    let start =1;
    let frwdArr =[]
    for(let i =0; i<arr.length;i++){
        frwdArr.push(start);
        start = start*arr[i];

    }

    let back =[]
    let start2=1;
    for(let i =arr.length-1; i>=0;i--){
        frwdArr[i] = start2*frwdArr[i]
        start2 = start2*arr[i];
        
    }

    console.log(frwdArr,"optimised")
}
//o(n) -t, o(1)-space
optimiseProductofArray(arr)