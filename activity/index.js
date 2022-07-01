let fs = require("fs");
let datachange = require("./commands/datachange");
let display = require("./commands/display");

let input = process.argv.slice(2);

firstinput = input[0];
if (firstinput[0] == "-") {
  // console.log("convert file d");

  if (firstinput[1] == "s") {
    // check the file cosnist or not ">>" or ">" not
    let filetpath = display.copyrequired_or_not(input[2]);
    if (filetpath[0] == false) {
      datachange.bgline_singleline(input[1]);
    } else {
      //  -s filename mean in which  remove extra space
      datachange.removespace(input[1], input[3]);
    }

    // console.log("s");
  } else if (firstinput[1] == "n") {
    datachange.linewithnuber(input[1]);
    // console.log("n");
  } else {
    console.log(" b");
    datachange.removeblankline(input[1]);
  }
} else {
  // mean humme copy krnai hai isme

  // mean yeah ">" or "<" or "<<" does not contain toh if chaleg
  let value = display.copyrequired_or_not(input);

  // console.log("converted file", value[0]);
  if (value[0] == false) {
    // console.log("converted file", value[0]);
    display.display(input);
  } else {
    let path1 = input[0];
    let path2 = input[2];
    // mean  path contain yeah ">" or "<" or "<<" does not contain toh
    if (value[1] == ">>") {
      if (display.fileexistornot(path1) == true) {
        display.appendcontent(path1, path2);
      }
    } else {
      // mean contain  ">"

      // console.log(input);

      if (display.fileexistornot(path1) == true) {
        display.copycontent(path1, path2);
      }
      // display.copycontent(input[0], input[2]);
    }
  }
}
