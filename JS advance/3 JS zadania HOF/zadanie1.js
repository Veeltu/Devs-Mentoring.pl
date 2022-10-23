/**Challenge 1
Korzystając z poniższej struktury:

const animals = [
	{name: 'Burek', eyes: 3, type: 'cat'},
	{name: 'Milelon', type: 'cat', eyes: 4},
	{name: 'Pusia', type: 'cat', eyes: 2},
	{name: 'Puszek', type: 'dog', eyes: 2},
	{name: 'Zorka', eyes: 2, type: 'dog'}
];

Wykorzystaj funkcję .map(), aby otrzymać następującą listę:
[
“Burek is a cat and has 3 eyes”,
“Milelon is a cat and has 4 eyes”,
“Pusia is a cat and has 2 eyes”,
“Puszek is a dog and has 2 eyes”,
“Zorka is a dog and has 2 eyes”
]

Przefiltruj listę animals - tak, 
aby otrzymać listę tylko tych zwierzat, przechowują informacje o psach.
Otrzymaj z listy animals stringa, który będzie składał się tylko i wyłącznie z imion zwierząt, tj. ‘Burek Milelon Pusia Puszek Zorka’
Otrzymaj z listy animals stringa, który będzie składał się tylko i wyłącznie z imion psów, tj. ‘Puszek Zorka’
*/

const animals = [
	{name: 'Burek', eyes: 3, type: 'cat'},
	{name: 'Milelon', type: 'cat', eyes: 4},
	{name: 'Pusia', type: 'cat', eyes: 2},
	{name: 'Puszek', type: 'dog', eyes: 2},
	{name: 'Zorka', eyes: 2, type: 'dog'}
];

function makeString(animals) {
    newArray = [];
    Object.values(animals).map((e) => {
        const newDate = (`${e.name} is a ${e.type}, and has ${e.eyes}`);
        newArray.push(newDate);
    })
    return newArray; 
}
// console.log(makeString(animals));

//* Przefiltruj listę animals - tak, aby otrzymać listę tylko tych zwierzat, przechowują informacje o psach.

function findAnimal(animals ,animalType) {
    newArray = [];
    Object.values(animals).map((e) => {
        if (e.type === animalType){
            newArray.push(e)
        }
    })
    return newArray;
}
// console.log(findAnimal(animals,'dog'))

//*Otrzymaj z listy animals stringa, który będzie składał się tylko i wyłącznie z imion zwierząt, tj. ‘Burek Milelon Pusia Puszek Zorka’

function makeNewString (animals){
    newArray = [];
    Object.values(animals).map((e)=> {
        const names = (`${e.name}`);
        newArray.push(names)
    })
    newString = newArray.toString();
    return newString;
}

// console.log(makeNewString(animals))

//*Otrzymaj z listy animals stringa, który będzie składał się tylko i wyłącznie z imion psów, tj. ‘Puszek Zorka’

console.log(makeNewString(findAnimal(animals, 'dog')))