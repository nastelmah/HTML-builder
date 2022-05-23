const path = require("path");
const fs = require("fs");

const folderPath = path.join(__dirname, "/styles");
const styleFile = path.join(__dirname, "/project-dist", "/style.css");
const projectFolder = path.join(__dirname, "/project-dist");
const copyFolder = path.join(__dirname, "/project-dist", "/assets ");

fs.mkdir(copyFolder, (err) => {
  if (err) {
    throw err;
  }
});

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  for (const key in files) {
    const element = files[key];
    const fullPathfile = folderPath + `/${element.name}`;
    if (element.isFile() && path.extname(fullPathfile) === ".css") {
      fs.readFile(fullPathfile, "utf8", function (error, data) {
        const arrayFileString = data.split();
        const findWord = data.match(/header/gm);
        console.log(findWord);
        fs.appendFile(styleFile, `${data}\n`, (err) => {
          if (err) throw err;
        });
      });
    }
  }
});

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
