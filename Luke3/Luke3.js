const fs = require("fs");
const charactersList = fs.readFileSync("./Luke3/input.txt", 'utf-8').split('\n');

const wordList = ['nisseverksted', 'pepperkake', 'adventskalender', 'klementin', 
    'krampus', 'juletre', 'julestjerne', 'gløggkos', 'marsipangris', 'mandel',
    'sledespor', 'nordpolen', 'nellik', 'pinnekjøtt', 'svineribbe', 'lutefisk',
    'medisterkake', 'grevinne', 'hovmester', 'sølvgutt', 'jesusbarnet', 'julestrømpe',
    'askepott', 'rudolf','akevitt'];

function compareStringToWordList(string) {
    for (let k = 0; k < wordList.length; k++) {
        let word = wordList[k];
        if (string.includes(word) || reverseString(string).includes(word)) {
            const index = wordList.indexOf(word);
            if (index > -1) {
                wordList.splice(index, 1);
            }
        }     
    }
}

function reverseString(string) {
    return [...string].reverse().join("");
}

function checkAllHorizontal() {
    for (let i = 0; i < charactersList.length; i++) {
        compareStringToWordList(charactersList[i]);
    }
}

function checkAllVertical() {
    for (let i = 0; i < 1000; i++) {
        let string = "";
        for (let j = 0; j < 1000; j++) {
            string = string.concat(charactersList[j].charAt(i));
        } 
        compareStringToWordList(string);
    }
}

function checkAllDiagonallyForward() {
    for (let x = 0; x < 1000; x++) {
        let string = "";
        let x2 = x;
        let y2 = 0;
        while (x2 < 1000 && y2 < 1000) {
            string = string.concat(charactersList[x2].charAt(y2));
            x2++; 
            y2++;
        }
        compareStringToWordList(string);
    }

    for (let y = 0; y < 1000; y++) {
        let string = "";
        let x2 = 0;
        let y2 = y;
        while (x2 < 1000 && y2 < 1000) {
            string = string.concat(charactersList[x2].charAt(y2));
            x2++; 
            y2++;
        }
        compareStringToWordList(string);
    }
}

function checkAllDiagonallyBackward() {
    for (let x = 999; x > 0; x--) {
        let string = "";
        let x2 = x;
        let y2 = 0;
        while (x2 >= 0 && y2 < 1000) {
            string = string.concat(charactersList[y2].charAt(x2));
            x2--; 
            y2++;
        }
        compareStringToWordList(string);
    }

    for (let y = 0; y < 1000; y++) {
        let string = "";
        let x2 = 999;
        let y2 = y;
        while (x2 >= 0 && y2 < 1000) {
            string = string.concat(charactersList[y2].charAt(x2));
            x2--; 
            y2++;
        }
        compareStringToWordList(string);
    }
}

checkAllHorizontal();
checkAllVertical();
checkAllDiagonallyForward();
checkAllDiagonallyBackward();
console.log("Ordene som ikke er med i matrisen er: ", wordList);