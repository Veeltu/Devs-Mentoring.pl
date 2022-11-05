// Zad. 10
// Pobierz od użytkownika imię oraz rok, w którym się urodził. Następnie wyświetl komunikat postaci: “Cześć <tutaj imię użytkownika>. Masz <tutaj wiek użytkownika> lat”. Aktualny rok pobieraj za pomocą następującego zapisu: currentYear = new Date().getFullYear();


const currentYear = new Date().getFullYear();
const yourName = prompt("what is your name:");
const brithYear = prompt("what is your birth year:");
 
const age = brithYear - currentYear;
 
console.log(`“Cześć ${yourName}. Masz ${age} lat”.`);
