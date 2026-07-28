import { writeFile, readFile } from "fs/promises";

// await writeFile("stud.txt", "Arpit Agnihotri\nRoll No: 287");
// console.log("File written");

// const data = await readFile("stud.txt", "utf-8");
// console.log(`File contents: ${data}`);

const addContent = (fname, content) => {
    await writeFile(fname, content);
    console.log(`${content} written in file ${fname} `);

};

const readContent = (fname) => {
    const data = await readFile(fname, 'utf-8');
    return data;

};

addContent("notes.txt", "FS is easy in JS");
console.log(readContent("notes.txt"));