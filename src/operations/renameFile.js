import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

const renameFile = (rl, displayMenu) => {
  const __filePath = fileURLToPath(import.meta.url);
  const __dirPath = path.dirname(__filePath);

  rl.question("Enter Old File Name: ", (oldFileName) => {
    rl.question("Enter New File Name: ", (newFileName) => {
      const oldName = path.join(
        __dirPath,
        "..",
        "..",
        "workspace",
        `${oldFileName}`,
      );
      const newName = path.join(
        __dirPath,
        "..",
        "..",
        "workspace",
        `${newFileName}`,
      );
      fs.rename(oldName, newName, (err) => {
        if (err) throw err;
        console.log("\n");
        console.log("File Renamed Successfully !!!");

        displayMenu(rl);
      });
    });
  });
};

export default renameFile;
