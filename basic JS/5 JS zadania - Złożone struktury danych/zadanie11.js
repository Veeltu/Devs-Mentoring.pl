/*
Zad 11.
Wygeneruj tablicę 1000 trójelementowych napisów 
składających się tylko z liter: ‘a’, ‘b’, ‘c’, ‘d’, ‘e’.
 Odczytaj rozmiar takiej tablicy. 
 Następnie usuń z niej duplikaty i wyświetl wynik. 
 Jak zmienił się rozmiar? 

*/

function makeid(length){
    let result              ='';
    let characters          ='abcde';
    let charactersLength    = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
     }
     return result;
}

const array = [];
for (let i=0; i < 1000; i++){
    array.push(makeid(5));
}
console.log(array.length)

let newSet = new Set();
array.forEach(newSet.add, newSet)
console.log(newSet.size)