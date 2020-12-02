const fs = require("fs");
const numberList = fs.readFileSync("./Luke1/input.txt", 'utf-8').split(',').map(Number);

var missingNumberList = new Array(100000);

missingNumberList.fill(false);

numberList.forEach(number => missingNumberList[number-1] = true);

for (let i = 0; i < missingNumberList.length; i++) {
    if (!missingNumberList[i]) {
        console.log("Tall nummer ", i+1, " mangler.");
        break;
    }
}