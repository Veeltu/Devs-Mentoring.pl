// zadanie6

// Zad. 6
// Wyświetl wszystkie liczby z przedziału od 0 do 1000, które są równocześnie podzielne przez 3 i 2. 


for(let i = 0; i <= 1000; i++)

{
  if (( i % 3 == 0 )&&( i % 2 == 0)) {
    console.log( `${i}` );
  }
}