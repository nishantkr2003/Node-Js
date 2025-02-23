console.log("My name is Nishant KUmar");

const fs = require("fs");
fs.writeFile("output.txt", "Writing File", (err) => {
  if (err) console.log("Error occur");
  else console.log("Successful");
});
