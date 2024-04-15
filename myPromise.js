function myPromise(resolver){
    let successList =[];
    let failureList =[];
    let state = "pending";
    let data ;

    function resolve(value){
        if(state == "pending"){
            for(let success of successList){
                success(value)
            }
        }
        state = "resolved";
        data = value;

    }

    function reject(value){
        if(state == "pending"){
            for(let failure of failureList){
                failure(value)
            }
        }
        state = "reject";
        data = value;
        
    }

    setTimeout(()=>{
        try{
            resolver(resolve,reject)
        }catch(err){
            reject(err)

        }
    },0)

    return {
        status:state,
        then: function(onSuccess,onFailure){
            if(state=="pending"){
                successList.push(onSuccess);
                failureList.push(onFailure)
            } else{
                state =="resolved"? onSuccess(data): onFailure(data)
            }
        }
    }
}

let p = new myPromise((resolve, reject) => {
    resolve(10);
  });
  p.then((data) => console.log(data));