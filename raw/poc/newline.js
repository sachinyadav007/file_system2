const fs = require("fs");

// // ./activity/ex2.txt"
// // for read the file
// let data = fs.readFileSync("ex2.txt", "utf8");

// console.log(data);

//   data=
// a = [1, 2, 3, 4, 5, 6];

// b = a.splice(1)
let a = process.argv.slice(2);
console.log(a);
// console.log(a);


// b = a.slice(0);
// console.log(b);
arr = [">>", ">"];
flag = false;
data = "";
// path.length
// console.log(arr);

// console.log(" length of arr", arr.length);

for (i = 0; i < arr.length; i++) {
  console.log(i);
  for (j in a) {
    if (arr[i] == a[j]) {
      flag = true;
      data = arr[i];
    } else {
      continue;
    }
  }
}
//   Doubt  why length se print ny kar pa rha ha
// for (i = 0; i < arr.length; i++) {
//   console.log(data);
// }

console.log(" status " + data + " " + flag);
