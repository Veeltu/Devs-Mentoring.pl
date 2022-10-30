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

let makeString = animals => { return animals.map(a => `${a.name} is a ${a.type}, and has ${a.eyes}`)}

console.log(makeString(animals));

//* Przefiltruj listę animals - tak, aby otrzymać listę tylko tych zwierzat, przechowują informacje o psach.


let findAnimal = (animals,animalType) => animals.filter(e => {
     if (e.type ===animalType) 
     {return e}})

// console.log(findAnimal(animals,'dog'))

//*Otrzymaj z listy animals stringa, który będzie składał się tylko i wyłącznie z imion zwierząt, tj. ‘Burek Milelon Pusia Puszek Zorka’

let makeNewString = (animals) => {
    result = ''
    animals.forEach((e) => (result += ` ${e.name}`))
    return result
}

console.log(makeNewString(animals))

//*Otrzymaj z listy animals stringa, który będzie składał się tylko i wyłącznie z imion psów, tj. ‘Puszek Zorka’

console.log(makeNewString(findAnimal(animals, 'dog')))