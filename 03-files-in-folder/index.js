const path = require("path");
const fs = require("fs");

const folderPath = path.join(__dirname, "/secret-folder");

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  for (const key in files) {
    const element = files[key];
    if (element.isFile()) {
      const fullPathfile = folderPath + `/${element.name}`;

      fs.stat(fullPathfile, function (err, stats) {
        console.log(
          `${path.basename(
            fullPathfile,
            path.extname(fullPathfile)
          )} - ${path.extname(fullPathfile)} - ${stats["size"]}kb`
        );
      });
    }
  }
});
