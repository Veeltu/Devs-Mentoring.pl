// Zad. 8
// Zadeklaruj trzy zmienne - pierwszą przechowującą informację o startowym poziomie paliwa, drugą określającą ilość astronautów na pokładzie, a trzecią mówiącą, na jakiej wysokości znajduje się rakieta.  

// Poproś użytkownika o podanie początkowego poziomu paliwa. Użytkownik ma kontynuować czynność, dopóki nie poda poprawnej wartości - mieszczącej się pomiędzy 5000 a 30000 litrów.
// Stwórz drugą pętlę, która będzie prosić o użytkownika o podanie odpowiedniej ilości astronautów znajdujących na pokładzie. Pętla ma walidować podaną liczbę - tak, aby była dodatnia i nie większa niż 7.
// Zasymuluj pętlą nr 3 lot statku kosmicznego. Kolejne iteracje mają zmniejszać obecny poziom paliwa o określoną wartość. Zużycie paliwa co 100 km zależy od ilości astronautów na pokładzie i jest równe: 300 l + 100 * ilosc_astronautow. 

// Pętla więc ma uruchamiać się co 100 km i wykonać tyle iteracji, na ile wystarczy paliwa. Co każdą iterację ma wyświetlać się aktualnie przebyty dystans przez statek kosmiczny. 

// Po wykonaniu się pętli, powinien wyświetlić się komunikat: “Statek kosmiczny dotarł do orbity”, jeżeli przebyta odległość jest większa niż 2000 km lub w przypadku mniejszej odległości - “Statek kosmiczny nie dotarł do orbity”.

// const paliowStart = "";
// const iloscAstronautow = "";
// const wysokoscRakiety = "";

// ----- 1 ----- //
// Poproś użytkownika o podanie początkowego poziomu paliwa. 
// Użytkownik ma kontynuować czynność, dopóki nie poda poprawnej wartości - mieszczącej się pomiędzy 5000 a 30000 litrów.

const paliwoStart = prompt("podaj właśćiwą ilość paliwa(5000 - 30000):");
if ((paliwoStart<=5000) || (paliwoStart>=30000)){
    // console.log("podałeś błędną ilość");
    throw new Error("podałeś błędną ilość");
}   else {
    console.log("rakieta gotowa do startu");
}  

// ----- 2 ----- //
// Stwórz drugą pętlę, która będzie prosić o użytkownika o podanie odpowiedniej ilości astronautów znajdujących na pokładzie. 
// Pętla ma walidować podaną liczbę - tak, aby była dodatnia i nie większa niż 7.

const iloscAstronautow = prompt("podaj właściwą ilość astronautów(1-6):");
if((iloscAstronautow<=0) || (iloscAstronautow>=7)){
    // console.log("podaj poprawną liczbę Astronautów");
    throw new Error("podałeś błędną liczbę Astronautów");
}   else {
    console.log("Astronauci gotowi do startu");
}

// ----- 3 ----- //
// Zasymuluj pętlą nr 3 lot statku kosmicznego. 
// Kolejne iteracje mają zmniejszać obecny poziom paliwa o określoną wartość. 
// Zużycie paliwa co 100 km zależy od ilości astronautów na pokładzie i jest równe: 300 l + 100 * ilosc_astronautow. 

// Pętla więc ma uruchamiać się co 100 km i wykonać tyle iteracji, na ile wystarczy paliwa. 
// Co każdą iterację ma wyświetlać się aktualnie przebyty dystans przez statek kosmiczny. 

const paliowZuzycie = 300 + 100 *  iloscAstronautow;
let wysokoscRakiety = 0;
for (i = paliwoStart; i >= 0; i -= paliowZuzycie){
  // wysokoscRakiety = wysokoscRakiety + 100;
  wysokoscRakiety += 100;
}
console.log(wysokoscRakiety);

// ----- 4 ----- //
// Po wykonaniu się pętli, powinien wyświetlić się komunikat:
//  “Statek kosmiczny dotarł do orbity”, 
//  jeżeli przebyta odległość jest większa niż 2000 km lub 
//  w przypadku mniejszej odległości - “Statek kosmiczny nie dotarł do orbity”.

if(wysokoscRakiety>=2000){
    console.log("Statek kosmiczny dotarł do orbity");
  } else {
    console.log("Statek kosmiczny nie dotarł do orbity");
  }