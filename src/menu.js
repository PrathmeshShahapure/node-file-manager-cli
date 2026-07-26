import createFile from "./operations/createFile.js";
import exitApp from "./operations/exitApp.js";
import readFile from "./operations/readFile.js";

const displayMenu = (rl) => {

  rl.question(
    `
        
=========================================
        📂 Node File Manager CLI
=========================================

1. 📄 Create File
2. 📖 Read File
3. ✍️ Append Content
4. 📝 Rename File
5. 🗑 Delete File
6. 🚪 Exit

Choose an option:`,

    (ans) => {
      switch (ans) {
        case "1":
              console.log(`You Choose Create File.`);
              createFile(rl, displayMenu);
          break;
        case "2":
          console.log(`You Choose Read File.`);
          readFile(rl,displayMenu)
          break;
        case "3":
          console.log(`You Choose Append File.`);
          break;
        case "4":
          console.log(`You Choose Rename File.`);
          break;
        case "5":
          console.log(`You Choose Delete File.`);
          break;
        case "6":
              console.log(`You Choose to Exit`);
              exitApp(rl)
          break;

        default:
          console.log(`Your input is invalid `);
          break;
      }
    },
  );
};

export default displayMenu;
