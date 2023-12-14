const fs = require("fs");

// function prom(){
//     let p = new Promise((resolve)=>{
//         fs.readFile("medium/a.txt","utf-8",(err,data)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             let str = data.replace(/\s+/g, " ").trim();
//             fs.writeFile("medium/a.txt",str,"utf-8",(err)=>{
//                 if(err){
//                     console.log(err);
//                     return;
//                 }
//                 console.log("edited");
//             });
            
//         });
//         resolve();
//     });
        
//     return p;
    

// }

// let a = prom();
// a.then(()=>{
//     console.log("Done!");
// })


fs.readFile("medium/a.txt","utf-8",(err,data)=>{
                if(err){
                    console.log(err);
                    return;
                }
                let str = data.replace(/\s+/g, " ").trim();
                fs.writeFile("medium/a.txt",str,"utf-8",(err)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log("edited");
                });
    
            });
