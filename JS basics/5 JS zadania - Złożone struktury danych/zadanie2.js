// Zad 2.
// Mając do dyspozycji poniższą listę imion:

// let names = [‘Jan’, ‘Grzegorz’, ‘Krzysztof’, ‘Maciej’, ‘Joanna’, ‘Izabela’, ‘Magdalena’, ‘Kinga’, ‘Kacper’]

// , odwołaj się kolejno do:
// pierwszego,
// ostatniego,
// przedostatniego,
// środkowego
// elementu. 

// Następnie dodaj na koniec takiej listy dwa nowe imiona, a na początek jedno. Ponów operacje. Czy otrzymałeś różne wyniki niż poprzednio? Jak zaprogramować ww. funkcjonalność tak, aby była niezależna od ilości elementów w liście.

let names = ["Jan", "Grzegorz", 'Krzysztof', 'Maciej', 'Joanna', 'Izabela', 'Magdalena', 'Kinga', 'Kacper'];
let newNamesToLast = names.push("Jareczek", "Olivia"); // nowe elementy na koniec
let newNamesToBegining = names.unshift("Adam"); // nowe elementy na początek


console.log(names[0]); // pierwszy
console.log(names[names.length - 1]); // ostatni
console.log(names[names.length - 2]); // przedostatni
console.log(names[names.length / 2 | 0]); // środkowy




