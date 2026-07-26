import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const appendContent = (rl, displayMenu) => {
  const __filePath = fileURLToPath(import.meta.url);
  const __dirPath = path.dirname(__filePath);

 rl.question("Enter File Name: ", (fileName) => {
    rl.question("Enter Content: ", (fileContent) => {
      const __workspaceFilePath = path.join(__dirPath,"..","..","workspace", `${fileName}`,);
      fs.appendFile(__workspaceFilePath, fileContent, (err) => {
          if (err) throw err;
        console.log("\n");
        console.log("File Appended Successfully !!!");
        displayMenu(rl);
      });
    });
  });
};

export default appendContent;
