const path = require("path");
const fs = require("fs");

const folderPath = path.join(__dirname, "/styles");
const styleFile = path.join(__dirname, "/bundle.css");

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  for (const key in files) {
    const element = files[key];
    const fullPathfile = folderPath + `/${element.name}`;
    if (element.isFile() && path.extname(fullPathfile) === ".css") {
      fs.readFile(fullPathfile, "utf8", function (error, data) {
        fs.appendFile(styleFile, `${data}\n`, (err) => {
          if (err) throw err;
        });
      });
    }
  }
});
