function calc(val) {
    const numb = Object.create(calc.prototype);
    numb.val = val;
    return numb;
}

calc.prototype = {
    plus(val) {
        this.val += val;
        return this;
    }
};
    
console.log(calc(1).plus(664113));// 664114