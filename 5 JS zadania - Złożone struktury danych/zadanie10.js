/*
Zad 10.
Wykonaj poniższe operacje:
Stwórz pusty zbiór. 
Stwórz zbiór składający się z liczb od 0 do 10 (użyj pętli)
Usuń element o wartości 5
Wyczyść zbiór
Stwórz drugi zbiór - składający się z 5 dowolnych nazw państw
Stwórz mapę składającą się z kluczy - państw oraz wartości,
czyli ilości liter każdego z państw 
*/

let numbers = new Set();
for(let i=0; i <=10 ; i++){
    numbers.add(i);
}
console.log(numbers)
numbers.delete(5);
console.log(numbers)
numbers.clear();
console.log(numbers)

let cities = new Set(['Madryt', 'Londyn', 'Warszawa', 'Berlin', 'Paryż']);
console.log(cities)

//mapa key - miasto, value- ilość liter

let newMap = new Map();
cities.forEach(function(value, valueAgain, set){
    newMap.set(value, value.length);
});

console.log(newMap);