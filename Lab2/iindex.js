import {writeFile, readFile} from "fs/promises";

//await writeFile('stud.txt','Arpit Patel\nRoll no:82');
//console.log("File written");
const data = readFile("stud.txt", "utf-8");
console.log('file content: ${data}');
