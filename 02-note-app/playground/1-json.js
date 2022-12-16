const fs = require("fs");
const book = {
  title: "Title book",
  author: "AJ",
};
const bookJson = JSON.stringify(book);

// console.log(bookJson);
// const parsedData = JSON.parse(bookJson);
// console.log(parsedData.author);

// fs.writeFileSync('1-json.json',bookJson);
// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data);
data.name = "Akash";
data.age = 24;
console.log(data);
fs.writeFileSync("1-json.json", JSON.stringify(data));
console.log(data);
