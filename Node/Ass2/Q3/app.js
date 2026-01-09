
import os from "os";
console.log("Free Memory",os.freemem());
console.log("Total CPU cores:",os.cpus().length)

import fs from "fs";
fs.writeFileSync("data.txt","Hello World");
fs.writeFileSync("Readme.md","## This is first line in Readme");
const content=fs.readFileSync("data.txt","utf8");
console.log("Content of data.txt",content)
fs.appendFileSync("data.txt", "\nThis is second line");
fs.unlinkSync("Readme.md");
console.log("Operations completed successfully");
