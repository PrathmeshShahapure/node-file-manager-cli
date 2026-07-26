import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const readFile = (rl, displayMenu) => {
  const __filePath = fileURLToPath(import.meta.url);
  const __dirPath = path.dirname(__filePath);

  rl.question("Enter File Name: ", (fileName) => {

      const __workspaceFilePath = path.join(__dirPath,"..","..","workspace", `${fileName}`,);
      fs.readFile(__workspaceFilePath,"utf-8", (err,data) => {
          if (err) throw err;
          console.log("\n")
          console.log("----------------");
          console.log(data);
          console.log("----------------");
        displayMenu(rl);
      });
   
  });
};

export default readFile;
