// Zad 2.
// Napisz program wyświetlający liczby całkowite z przedziału <100; 50> w porządku malejącym. Wykonaj to na pętli for i while.

//FOR
for(let i = 100; i >= 50; i--)
{
    console.log(`${i}`);
}

//WHILE
let i = 100;
while ( i >= 50){
  console.log(`${i}`);
  i--;
}