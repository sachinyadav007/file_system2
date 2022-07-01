let fs = require("fs");

//  checkm for the fike exisit or not
function fileexistornot(path) {
  try {
    if (fs.existsSync(path)) {
      // console.log(" ji");
      return true;
    } else {
      console.log("file doesnot exixst");
      return false;
    }
  } catch (err) {
    console.error(err);
  }
}
let path = process.argv.slice(2);
fileexistornot(path[0]);
