const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "/text.txt");
const stream = new fs.ReadStream(filePath, {
  encoding: "utf-8",
});

stream.on("readable", () => {
  let dataInThisFile = stream.read();
  if (dataInThisFile) {
    console.log(dataInThisFile);
  }
});
