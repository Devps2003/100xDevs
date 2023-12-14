/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },n*1000);

    })
    return p;
}

// let a = wait(2);
// a.then(()=>{
//     console.log("hehe 2 sec hogye");
// })

module.exports = wait;
