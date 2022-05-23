const path = require("path");
const fs = require("fs");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const Emitter = require("events");

const emitter = new Emitter();
const rl = readline.createInterface({ input, output });

const filePath = path.join(__dirname, "/testFile.txt");

fs.open(filePath, "w", (err) => {
  if (err) throw err;
});

function readConsoleAndWriteInFile() {
  rl.question("What do you want to write? ", (answer) => {
    if (answer === "exit") {
      rl.close();
    } else {
      fs.appendFile(filePath, `${answer}\n`, (err) => {
        if (err) throw err;
      });
      emitter.emit("console-name");
    }
  });
}

emitter.on("console-name", readConsoleAndWriteInFile);
emitter.emit("console-name");
