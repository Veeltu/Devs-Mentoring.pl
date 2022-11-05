// Zad 6.
// Stwórz mapę, która będzie przechowywała 5 par: kluczami będą nazwy użytkowników 
// (Dagger, Dev, JS-coder, Python-Coder, Mike), a wartości do nich przypisane - 
// stringami reprezentującymi dowolne daty rejestracji w formacie DD-MM-YYYY.

// Po inicjalizacji, dodaj do takiej listy 2 nowych użytkowników
// Usuń dowolnego usera
// Wyświetl wszystkie daty przechowywane w mapie, ale w formacie DD/MM/YYYY (nie DD-MM-YYYY)
// Usuń z mapy użytkownika o nickname JS-coder

let users = new Map();

users.set('Dagger',('10-03-2022'))
users.set('Dev',('11-05-2021'))
users.set('JS-coder',('1-06-2022'))
users.set('Python-Coder',('16-09-2020'))
users.set('Mike',('11-05-2012'))

console.log(users.entries());


users.set('Doom',('12-04-2018'));
users.set('Good',('12-04-2018'));

console.log(users.entries());

users.delete('Doom');

console.log(users.entries());

console.log(users.values());

const date = Array.from(users.values()); // zmiana values na tablicę

const newDate = date.map(element => {
    console.log(element.replaceAll(/-/gi, "/")); // zamiana '-' na '/'
});
 