const calculator ={
    total:0,
    add: function (val){
        this.total = this.total+val;
        return this
    },
    
    sub: function(val){
        this.total = this.total-val;
        return this
    },
    
    mul: function (val){
        this.total = this.total*val
        return this
    },
    
    divide: function (val){
        this.total = this.total/val;
        return this
    }
}

console.log(calculator.add(10).mul(5).total) //50
