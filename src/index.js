import readline from "readline";
import displayMenu from "./menu.js";

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 });
 

displayMenu(rl);
