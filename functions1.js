function count(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return function(e) {
                    console.log([a, b, c, d, e].reduce((f, g) => typeof g === typeof 1 ? f + g: f + 0));
                }
            }
        }
    }
}
count(3)(2)(1)(5)(7);// 18
count(3)(null)(1)('asad')();// 4