/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

//console.log("1");
function sleep(milliseconds) {
    let p = new Promise((resolve)=>{
        let d = new Date();
        const t= d.getTime();
        while(Date.now()-d<milliseconds){

        }
        resolve();

    })
    return p;
}
// let a = sleep(2000);
// a.then(()=>{
//     console.log("3");
// })
// console.log("2");


module.exports = sleep;
