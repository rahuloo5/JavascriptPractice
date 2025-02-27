function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  // your code here
   return new Promise((resolve,reject)=>{
        let retry =0
        
        const getData =()=>fetcher().then((data)=>{
            resolve(data)
        }).catch((error)=>{
            if(retry<maximumRetryCount){
                getData();
                retry = retry+1
            } else{
                reject(error)
            }
        })
       getData() 
        
    })
}
