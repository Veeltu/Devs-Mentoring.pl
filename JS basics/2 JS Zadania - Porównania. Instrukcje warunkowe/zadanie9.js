// Zadanie9.js
// Napisz program pobierający od użytkownika 2 liczby. Sprawdź, czy co najmniej 1 z nich jest parzysta.

const number1 = prompt("podana liczba nr1 to:");
const number2 = prompt("podana liczba nr2 to:");

if ((number1 % 2) ==0 ||(number2 % 2) ==0 )
    console.log("parzysta");
else
    console.log("nieparzysta");
