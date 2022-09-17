// Zad 13.
// Zasymuluj grę w papier, kamień, nożyce. 
// Oczywiście będzie to uproszczona wersja, ponieważ będzie zapewniała wprowadzenie danych tylko jednorazowo. 
// Pobierz od użytkownika numer 1 słowo spośród: "kamień", "papier", "nożyce", operację przeprowadź również dla użytkownika numer 2. 
// Następnie wyświetl, który z użytkowników wygrał to jednorazowe starcie (pamiętaj o tym, który przedmiot jest w grze "silniejszy" od drugiego). 
// Dodatkowo zabezpiecz program przed wprowadzeniem nieprawidłowych danych, 
// czyli jeżeli użytkownik nie wprowadzi ani "kamień", ani "papier", 
// ani "nożyce" program ma natychmiastowo przerwać działanie i wyświetlić komunikat: "Błędne dane!".

//              nożyce      papier      kamień
//  nożyce        R           N>P         N>K 
//  papier        P<N         R           P>K     
//  kamień        K>N         K<N         R

const gracz1 = prompt("Wpisz: p-papier, n-nożyce, k-kamień");
const gracz2 = prompt("Wpisz: p-papier, n-nożyce, k-kamień");

if ((gracz1 === 'p' && gracz2 === 'k') || (gracz1 === 'k' && gracz2 === 'n') || (gracz1 === 'n' && gracz2 === 'p') ){
    console.log("gracz1 wygrał");
}
else if ((gracz2 === 'p' && gracz1 === 'k') || (gracz2 === 'k' && gracz1 === 'n') || (gracz2 === 'n' && gracz1 === 'p') ){
    console.log("gracz2 wygrał");
}
else if (gracz1===gracz2){
    console.log("remis")
}
else {
  console.log("błędne dane")
}

