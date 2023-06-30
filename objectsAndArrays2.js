function countFromArr(arr) {
    let result = {};
    let previous = [];
    let count;
    for(let i = 0; i < arr.length; i++) {
        count = 0;
        if (!previous.includes(arr[i])) {
            previous.push(arr[i]);
            for(let j=i; j < arr.length; j++) {
                if(arr[i] === arr[j]) {
                    count++;
                }
            }
        result[arr[i]] = count;
        }
    }
    return result;
}
    
const arr = [1, 1, 1, 'test', 'test'];
const res = countFromArr(arr);
console.log(res);// { 1: 3, test: 2 }