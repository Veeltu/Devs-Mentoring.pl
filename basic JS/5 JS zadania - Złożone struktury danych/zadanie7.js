// Mając do dyspozycji poniższy zestaw informacji 
// (jest to informacja o językach i ilości kursantów przypisanego do każdego z nich; zestaw ten umieść w Mapie)... 
// … odczytaj nazwę państwa, z którym skojarzona jest największa ilość uczestników. Wykorzystaj forEach().

let users = new Map([
    ["French:", 45],
  ["Arabic: ", 25],
  ["Spanish:", 24],
  ["Russian:", 9],
  ["Portuguese:", 9],
  ["Dutch:", '8'],
  ["German:", 7],
  ["Chinese:", 5],
  ["Swahili:", 4],
  ["Serbian:", 4],
  ["English:", 91],
]);
//keys to array
let numbers =[];
users.forEach((values,keys) => {
    let number = Math.max(values);
    numbers.push(number);
});
//find biggest number in array
var biggestNumber = Math.max.apply(Math, numbers);
console.log(biggestNumber)
//find key from map with biggestNumber value
function getKey(value) {
    return [...users].find(([key,val]) => val == value)[0]
}
console.log(getKey(biggestNumber));


// jak znaleść największą values in map ?
