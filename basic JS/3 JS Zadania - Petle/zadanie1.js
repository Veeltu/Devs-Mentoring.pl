// Zad 1.
// Napisz program wyświetlający liczby całkowite z przedziału <0; y>, gdzie y podaje użytkownik. Wykonaj to na pętli for i while.


//PĘTLA FOR

for(let i = prompt("Podaj liczbę całkowitą: "); i > 0; i--)
{
    console.log(`${i}`);
}

//PĘTLA WHILE

let i = prompt("podaj liczbę całkowitą:...")
while ( i > 0){
  console.log(`${i}`);
  i--;
}