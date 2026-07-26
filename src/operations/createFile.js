import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

const createFile = (rl, displayMenu) => {
  const __filePath = fileURLToPath(import.meta.url);
  const __dirPath = path.dirname(__filePath);

  rl.question("Enter File Name: ", (fileName) => {
    rl.question("Enter Content: ", (fileContent) => {
      const __workspaceFilePath = path.join(
        __dirPath,
        "..",
        "..",
        "workspace",
        `${fileName}`,
      );
      fs.writeFile(__workspaceFilePath, fileContent, (err) => {
        if (err) throw err;
        console.log("File Created Successfully !!!");

        displayMenu(rl);
      });
    });
  });
};

export default createFile;
