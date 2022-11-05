
// Zad 5.
// Napisz program, który wyświetli liczby z przedziału <50; 100> podzielne przez całkowitą liczbę k,
// którą podaje użytkownik. Przekształć program tak, aby przedział podawał również użytkownik. 


const a = prompt ("liczba przedziału od:")
const b = prompt ("liczba przedziału do:")
const n = prompt ("pdzielne przez:")
for(let i = a; i <= b; i++)
  
{
  if ( i % n == 0 ) {
    console.log( `${i}` );
  }
}