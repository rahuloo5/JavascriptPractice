function binarySearch(arr,target){
    console.log("rahul")
   
    let leftElement = 0;
    let rightElement = arr.length-1;
    while(leftElement<=rightElement){
        let middleElement = Math.floor((leftElement+rightElement)/2);
        if(target === arr[middleElement]){
            return middleElement
        } 
         if(target<arr[middleElement]){
            rightElement = middleElement-1;
        } else{
            leftElement = middleElement+1;
        }

    }
    return -1;
}

const allele = [1,2,4,6,8,9]

console.log(binarySearch(allele,8),"result");


function recursiveBinary(arr,target){
   return Search(arr,target,0,arr.length-1);
}

function search(arr,target,left,right){
    let middle = Math.floor((left+right)/2);

    if(target === arr[middle]){
        return middle
    };
    if(target<arr[middle]){
       return search(arr,target,0,middle-1)
    } else{
       return search(arr,target,middle+1,right)
    }
}

//big(o)===>ologn(o)