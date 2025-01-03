const fs = require("fs");

// Blocking, synchronous way :
// const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
// console.log(textIn);

/* access for reading data,
writing data to the file system. (fs = file system)
 calling the require() function here with this 
 built-in fs module name will then return an object
  in which there are lots of functions that can use
   */

/* we can also write to files, so let's create some
new variable here with some more text, 
 */

// const textOut = `This is what we know about the
// avocado: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("./starter/txt/output.txt", textOut);

// console.log("File written!");

// Non-blocking, asynchronous way:
// to read a file :
fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./starter/txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile(
        "./starter/txt/final.txt",
        `${data2}\n${data3}`,
        "utf-8",
        (err) => {
          console.log("Your file has been written 😁");
        }
      );
    });
  });
});
console.log("Will read file");
