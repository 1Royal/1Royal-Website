// const fs = require("fs");
// const path = require("path");
import fs from "fs";
import path from "path";

const allFolders = fs.readdirSync("./");
console.log(allFolders)
