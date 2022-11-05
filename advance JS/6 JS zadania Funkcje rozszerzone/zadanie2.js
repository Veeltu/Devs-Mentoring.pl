/**
Zad 2.
Stwórz funkcję, która przyjmować będzie trzy argumenty (z czego dwa z nich będą callbackami do funkcji: greeting oraz goodbye, a ostatni będzie stringiem przyjmującym dwie wartości: “hi” lub “cya”).
W momencie, gdy do funkcji zostanie przesłane “hi”, wywoływany ma być callback greeting, który wyświetli “Hi you too!”, a na “cya”: “See you later!”. 
 */

const hi = e => { return "Hi, you too!" }
const bye = e => { return "See you later!"}

const newFunction = ( hi , bye, say ) => {
    if ( say === "hi" ) { return hi}
    else { return bye }
}

console.log(newFunction( hi(), bye(), "hi"))

