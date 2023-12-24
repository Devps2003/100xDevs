const fs = require("fs");

fs.readFile(
  "easy/a.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);
// let cnt =0;
// for(let i=0;i<10000000000;i++){
//     cnt++;
// }
// console.log(cnt);
