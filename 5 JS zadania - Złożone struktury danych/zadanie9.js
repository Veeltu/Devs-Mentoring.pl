/*
Zad 9.
Utwórz zbiór uniqueNumbers i dodaj do niego następujące wartości:
1231112
1231113
1231114
1221112
1231119
1231112
1231114
Odczytaj jego rozmiar. Dlaczego jest on równy 5, a nie 7 
(czyli ilości liczb, które umieściliśmy w zbiorze)?
*/

let uniqueNumbers = new Set();
uniqueNumbers.add(1231112);
uniqueNumbers.add(1231113);
uniqueNumbers.add(1231114);
uniqueNumbers.add(1221112);
uniqueNumbers.add(1231119);
uniqueNumbers.add(1231112);
uniqueNumbers.add(1231114);

console.log(uniqueNumbers.size)

