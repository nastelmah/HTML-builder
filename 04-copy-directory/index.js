const path = require("path");
const fs = require("fs");

const folderPath = path.join(__dirname, "/files");
const copyFolder = path.join(__dirname, "/files-copy");

fs.mkdir(copyFolder, (err) => {
  if (err) {
    throw err;
  }
});

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  for (const key in files) {
    const element = files[key];
    const fullPathfile = folderPath + `/${element.name}`;
    const copyToFolder = copyFolder + `/${element.name}`;
    fs.copyFile(fullPathfile, copyToFolder, (err) => {
      if (err) {
        throw err;
      }
    });
  }
});
