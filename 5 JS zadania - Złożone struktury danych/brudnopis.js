// Zestaw III
// Stwórz listę 10-ciu dowolnie wygenerowanych kodów o długości 5 lub 6 (długość ma być losowana)
// Wyświetl tylko te wyrazy, których długość jest parzysta
// -------------------------------------------------------------------------------------------------------------



let randomLength = Math.floor(Math.random()* (6 - 5 + 1) + 5);

let text = [];
let codePossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


let symbol = [];
function generateSymbol(min,max){
    symbol += codePossible.charAt(Math.floor(Math.random() *(max - min + 1) + min));
}



// for (let i=0; i <  randomLength; i++){
//     generateSymbol();
// }

// let arraySymbol = [];
// const arraySymbolSplit = arraySymbol.split(splitByNumber);
// arraySymbol.push(symbol);
// console.log(arraySymbol);
// console.log(arraySymbol.split(""));

// symbol.split(``);
console.log(symbol.split(``));
console.log(symbol.length);


// for (let i =0; i < 10; i++){

// for (let i=0; i < randomLength ; i++){
//     text += codePossible.charAt(Math.floor(Math.random() *(62 - 1 + 1) + 1));
// }
// }

// for (let i=0; i < 10 ; i++){
//     text += codePossible.charAt(Math.floor(Math.random() *(62 - 1 + 1) + 1));

// }
// const tablica = text.split("", 10);
// console.log(text);
// console.log(tablica);