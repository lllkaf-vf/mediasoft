console.log("start");

setTimeout(() => console.log("timeout"), 0);

new Promise((resolve, reject) => {
    console.log("promise constructor");

    reject();
})
    .then(() => console.log("p1"))
    .catch(() => console.log("p2"))
    .catch(() => console.log("p3"))
    .then(() => console.log("p4"))
    .then(() => console.log("p5"));
    
console.log("final");

// start
// promise constructor
// final
// p2
// p4
// p5
// timeout