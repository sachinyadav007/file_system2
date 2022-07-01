let fs = require("fs");

function display(path) {
  //   console.log(path);
  for (i = 0; i < path.length; i++) {
    file = path[i];
    let data = fs.readFileSync(file, "utf8");
    console.log(data);
  }
}

function copyrequired_or_not(path) {
  let a = path;
  arr = [">>", ">"];
  flag = false;
  data = "";

  for (i = 0; i < arr.length; i++) {
    // console.log(i);
    for (j in a) {
      if (arr[i] == a[j]) {
        flag = true;
        data = arr[i];
      } else {
        continue;
      }
    }
  }
  let arr2 = [flag, data];
  return arr2;
}

function appendcontent(src, dest) {
  //   console.log(path);
  let data = "";

  data = fs.readFileSync(src, "utf8");

  //  yeah bassically isliye use ho rha hai taki "nextline "  aa sakine
  fs.appendFile(dest, "\n", (err) => {
    if (err) throw err;
  });

  fs.appendFile(dest, data, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    console.log("Content copy Sucessfully");
  });
}

function copycontent(src, dest) {
  //   console.log(path);
  let data = "";
  console.log(src);
  console.log(dest);

  data = fs.readFileSync(src, "utf8");

  //  yeah bassically isliye use ho rha hai taki "nextline "  aa sakine
  fs.appendFile(dest, "\n", (err) => {
    if (err) throw err;
  });

  fs.writeFile(dest, data, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    console.log("Content copy Sucessfully");
  });
}
// writeFileSync

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

module.exports = {
  display,
  copyrequired_or_not,
  appendcontent,
  copycontent,
  fileexistornot,
};
