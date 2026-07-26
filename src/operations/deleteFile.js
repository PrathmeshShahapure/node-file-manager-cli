import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const deleteFile = (rl, displayMenu) => {
  const __filePath = fileURLToPath(import.meta.url);
  const __dirPath = path.dirname(__filePath);

  rl.question("Enter File Name: ", (fileName) => {

      const __workspaceFilePath = path.join(__dirPath,"..","..","workspace", `${fileName}`,);
      fs.unlink(__workspaceFilePath, (err) => {
          if (err) throw err;
          console.log("\n")
          console.log("File Deleted Successfully !!!");
        displayMenu(rl);
      });
   
  });
};

export default deleteFile;
