var MinStack = function() {
    this.arr = [];
    //keeps track of min element at every point in lifetime of stack 
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
    //if stack is empty
    if(this.min.length === 0) this.min.push(x);
    else {
        //if stack is non empty push the min element between current ele and top of this.min
        //for instance our stack was [-1, -0, -3]
        //push(-1) this.arr = [-1] | this.min = [-1]
        //push(0) this.arr = [-1, 0] | this.min = [-1, -1]
        //push(-3) this.arr = [-1,0,-3] | this.min = [-1,-1,-3]
        this.min.push(Math.min(this.min[this.min.length - 1], x));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.arr.length != 0) {
        //pop ele from both this.arr and this.min
        this.arr.pop();
        this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    //if this.arr non empty return element at last index of this.arr
    if(this.arr.length != 0) return this.arr[this.arr.length -1];
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //if this.min non empty return element at last index of this.min
    if(this.min.length != 0) return this.min[this.min.length -1];
    return null
};
