function debounce(func, wait, option = {leading: false, trailing: true}) {
  let timerId = null, savedArgs = null;
  
  return function(...args) {
    if (!timerId && option.leading) {
      func(...args);
    } else {
      savedArgs = args;
    }
    
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      if (option.trailing && savedArgs) {
        func(...savedArgs);
      }
      timerId = null;
    }, wait);
  }
}
