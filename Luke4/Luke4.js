const fs = require("fs");
const leveringsliste = fs.readFileSync("./Luke4/input.txt", 'utf-8').split('\r\n');

let seperateProdukter = new Array();
let sukker = 0;
let melk = 0;
let mel = 0
let egg = 0;

leveringsliste.forEach(levering => {
    produkt = levering.split(', ');
    seperateProdukter.push(...produkt);
});

seperateProdukter.forEach(produkt => {
    let temp = produkt.split(': ');
    switch (temp[0]) {
        case 'sukker':
            sukker += Number(temp[1]);
            break;
        case 'melk':
            melk += Number(temp[1]);
            break;
        case 'mel': 
            mel += Number(temp[1]);
            break;
        case 'egg':
            egg += Number(temp[1]);
            break;
    }   
});

let resultat = ['Sukker', sukker/2];

if (melk/3 < resultat[1]) {
    resultat = ['Melk', melk/3];
} 
if (mel/3 < resultat[1]) {
    resultat = ['Mel', mel/3];
}
if (egg < resultat[1]) {
    resultat = ['Egg', egg];
}

console.log('Det ble bakt ', resultat[1], ' kaker, og Halvor må ha vært veldig glad i egg!')