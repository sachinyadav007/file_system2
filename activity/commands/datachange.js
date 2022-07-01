let fs = require("fs");

function removeblankline(path) {
  let data = fs.readFileSync(path, "utf8");

  let lines = data.split(/\r?\n/);
  let p = 0;
  for (i = 0; i < lines.length; i++) {
    let data = lines[i];
    if (data.length > 0) {
      console.log(p + 1, data);
      p = p + 1;
    }
  }
}

function bgline_singleline(path) {
  let data = fs.readFileSync(path, "utf8");

  let lines = data.split(/\r?\n/);
  // console.log(lines);
  prev = lines[0];
  if (prev.length > 0) {
    console.log(prev);
  }

  for (i = 2; i < lines.length; i++) {
    let data = lines[i];
    if (data.length == 0) {
      if (prev.length == 0) {
        continue;
      } else {
        console.log(data);
      }
      prev = data;
    } else {
      console.log(data);
      prev = data;
    }
  }
}

function removespace(src, dest) {
  let data_with_space = fs.readFileSync(src, "utf8");

  let data_with_out_space = data_with_space.replace(/\s+/g, " ").trim();

  fs.appendFile(dest, "\n", (err) => {
    if (err) throw err;
  });

  fs.appendFile(dest, data_with_out_space, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    console.log("removed spaced sussully");
  });
}

function linewithnuber(path) {
  console.log(" avlue fo the path sis", path);
  let data = fs.readFileSync(path, "utf8");
  let lines = data.split(/\r?\n/);

  for (i = 0; i < lines.length; i++) {
    console.log(i + 1, lines[i]);
  }
}

module.exports = {
  removeblankline,
  bgline_singleline,
  linewithnuber,
  removespace,
};
