import fs from "fs";
// const fs = require("fs");

let allFolders = fs.readdirSync("./");
console.log(allFolders);

allFolders.forEach((elem) => {
  if (elem === "produ.js") return;
  let folderName = elem;
  let folderNum = folderName.split(" ")[0];
  const file = fs.readdirSync(`./${folderName}`);
  //   console.log(file); // array of all files
  //   console.log(file.length);

  for (let i = 1; i <= file.length; i++) {
    let stmt = `import p${folderNum}_${i} from \"./Products/${folderName}/${
      file[i - 1]
    }\"`;

    console.log(stmt);
  }
  console.log("\n");
});
