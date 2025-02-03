function throttle(func, wait) {
  let isWaiting = false;
  let lastArgs = null;
  return (...args)=>{
    if(isWaiting == false){
      func.call(this,...args);
      isWaiting = true;
      setTimeout(()=>{
        if(lastArgs){
          func.call(this,...lastArgs);
        }
        isWaiting = false;
      },wait);
    }else{
      lastArgs = args;
    }
  }
}


  // your code here
  /**  Idea of throttle is to execute the function right away. and then wait for 
   * and wait for the cool down time and then excute the function with the last arguments which were
   * used to call the function
   * 
   * 
   * So during the cool down period if lets say I call the function with argument B and then C and then D
   * whichever was called last would be respected and executed and rest would be ignored
   * in this case B & C would be ignored and D would be the last argument and will be executed
   * 
   * Algorithm
   * 1) We will execute the function right away and set the isWaiting period to true
   *    1.1) we also must set a timeout to make isWaiting to true and execute the throttled function 
   *        if the throttled function was called inbetween the cool down time.
   * 2)  if during the cool down period the throttled function was called then we have to store its value
   *    in the Last args.
*/
