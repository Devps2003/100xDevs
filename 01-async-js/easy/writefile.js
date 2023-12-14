const fs = require("fs");

fs.writeFile(
  "easy/a.txt","Sup guys!","utf8",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File written successfully.");
  }
);

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