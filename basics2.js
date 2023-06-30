const a = () => console.log("a");
const b = () => console.log("b");
const c = a || b ? a() : b();
console.log(c);
//вывод:
// a
// Undefined

// При проверке условия a() истинно, значит b не будет выводиться.
// Undefined потому что return не прописан.