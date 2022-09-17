// Zad 3.
// Aby przećwiczyć możliwe do wywołania metody na tablicy, wykonaj poniższe kroki (realizację każdego z zestawów umieść w oddzielnych funkcjach):

// Zestaw I
// Stwórz pustą  tablicę
// Dodaj do niej 5 nowych elementów
// Odczytaj długość takiej tablicy
// Umieść nowy element na początku tablicy
// Odczytaj pierwszy, środkowy oraz ostatni element na takiej liście


let names = [];
let addNames = names.push("Adam", "Monika", "Kaja", "Piotr", "Marta");
console.log(names.length);
let addNamesBegining = names.unshift("Paweł");
console.log(names[0]);
console.log(names[names.length / 2 | 0]);
console.log(names[names.length -1]);

// Zestaw II
// Zadeklaruj pustą tablicę i umieść w niej 5 dowolnych nazw firm IT, które poda użytkownik. Użyj pętli.
// Wyświetl tylko te firmy, które nie mają w nazwie litery ‘o’
// Sprawdź czy użytkownik podał firmę o nazwie “Devs-Mentoring.pl”. Na podstawie tego wyświetl odpowiedni komunikat.
// Usuń drugą nazwę firmy z listy
// Wyświetl tylko te nazwy, których długość przekracza 8 znaków
// Skopiuj tablicę do companies_copy
// Odwróć oryginalną listę, korzystając z funkcji reverse()


// Zadeklaruj pustą tablicę i umieść w niej 5 dowolnych nazw firm IT, które poda użytkownik. Użyj pętli.

let names = [];

for(let i = 0 ; i < 3 ; i++) {
const addNames = prompt("Podaj nazwę firmy: ");
names.push(addNames);
}
console.log(names);

// Wyświetl tylko te firmy, które nie mają w nazwie litery ‘o’

let noOnames=[];

names.forEach(element => {
    if (!(element.includes("o"))){
        noOnames.push(element);
    }
});
console.log(`names with no "O" : ${noOnames}`);

// Sprawdź czy użytkownik podał firmę o nazwie “Devs-Mentoring.pl”. Na podstawie tego wyświetl odpowiedni komunikat.

if(names.includes("Devs-Mentoring.pl")){
    console.log("WE GOT DEVS-MENTORING.PL");
}else {
    console.log("where is Devs-Mentoring.pl?");
};

// Usuń drugą nazwę firmy z listy

names.splice(1,1);
console.log(`"names" with splice second name: ${names}`);

//Wyświetl tylko te nazwy, których długość przekracza 8 znaków

let namesEight = [];
names.forEach(e =>{
    if(e.length >= 8){
        namesEight.push(e);
    }
})
console.log(`names with 8 characters: ${namesEight}`);

// skopiowanie tablicy

let copyNames = names.slice();
console.log(`copy of array "names": ${copyNames}`);

// Odwróć oryginalną listę, korzystając z funkcji reverse()

names.reverse();
console.log(`reverse of array "names" : ${names}`);

// Zestaw III
// Stwórz listę 10-ciu dowolnie wygenerowanych kodów o długości 5 lub 6 (długość ma być losowana)
// Wyświetl tylko te wyrazy, których długość jest parzysta

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const array=[];

for(let i=0;i<10;i++){
array.push(makeid(randomInteger(5,6)));
}
console.log(array);

