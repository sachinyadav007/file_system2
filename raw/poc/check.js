let fs = require("fs");

let stats = fs.Stats();

function isFileOrNot(path) {
  // return fs.lstatSync(src).isFile();

  if (fs.existsSync(path)) {
    // console.log("File exists.")
    return true;
  } else {
    // console.log("File does not exist.")
    return false;
  }
}

let input = process.argv.slice(2);
// console.log(input[0][0]);
if (isFileOrNot(input[0]) == true) {
  console.log(" file exisit ");
} else {
  console.log(" fiel doesnot exisit");
}
