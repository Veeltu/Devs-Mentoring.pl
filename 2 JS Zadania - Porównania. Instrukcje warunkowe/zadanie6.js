// Zad. 6
// Napisz program sprawdzający, czy podana przez użytkownika jest ujemna, dodatnia lub czy ma wartość równą 0.


const number = prompt("podana liczba to:");
function x() {
if (number < 0){
  alert("liczba jest ujemna");
}
else if (number == 0){
  alert("liczba jest równa zero");
}
else if (number > 0){
  alert("liczba jest dodatnia");
}};
x();
