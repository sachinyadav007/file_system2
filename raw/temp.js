// mean yeah ">" or "<" or "<<" does not contain toh if chaleg
// mean humme copy krnai hai isme
let fs = require("fs");

let path = process.argv.slice(2);
function copycontent(src, dest) {
  let data = "";

  data = fs.readFileSync(src, "utf8");
  console.log(data);
  //  yeah bassically isliye use ho rha hai taki "nextline "  aa sakine
  fs.appendFile(dest, "\n", (err) => {
    if (err) throw err;
  });
  // thats would write the content  in the destination file
  fs.writeFile(dest, data, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    console.log("Lyric saved!");
  });
}

function removextraspace() {
  let data_with_space = fs.readFileSync("ex3.txt", "utf8");

  let data_with_out_space = data.replace(/\s+/g, " ").trim();

  console.log(data_with_out_space);
}
// removextraspace();

function helpe() {
  let data = fs.readFileSync("ex1.txt", "utf8");
  dest = "ex3.txt";

  fs.writeFileSync(dest, data, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    console.log("Content copy Sucessfully");
  });
}
console.log("Content copy Sucessfully2");

helpe();
