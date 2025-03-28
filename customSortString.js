/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
      const str = new Map();
    let newStr = "";

    for(let i = 0; i < s.length;i++){
       let count = str.get(s[i]) || 0;
       str.set(s[i] , ++count);
    }

    for(let i = 0; i < order.length;i++){
        let count = str.get(order[i]);
        while(count > 0){
            newStr += order[i];
            --count
            if( count <= 0 ){
                str.delete(order[i])
            }
        }
    }
   

    for (let [key, value] of str) {
        let count = value
        while(count > 0){
            newStr += key;
            --count
            if( count <= 0 ){
                str.delete(key)
            }
        }
    }
    return newStr
    
};
