import fs from "fs";





// fs.mkdir("test", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("amjilttai");
//   }
// });



const data = {name: "bill", age: 30};
fs.writeFileSync("text.txt", JSON.stringify(data))






// fs.writeFile("writefile.txt", "writefile", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("amjilttai");
//   }
// })




// const data = fs.readFileSync("writefile.txt")
// console.log(data.toString());




// fs.readFile("writefile.txt", (err, data) => console.log(data.toString()))