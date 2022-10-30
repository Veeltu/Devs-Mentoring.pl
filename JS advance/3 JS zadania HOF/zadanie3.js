// Challenge 3
// Mając do dyspozycji poniższą listę:

// const people = [
//      { name: 'Wes', year: 1988 },
//      { name: 'Kait', year: 1986 },
//      { name: 'Irv', year: 1970 },
//      { name: 'Lux', year: 2015 }
// ];

// Stwórz obiekt klasy DataManipulator, który będzie zawierał metody przeprowadzadzające poniższe operacje. Dodaj odpowiednie metody walidujące.

// Sprawdź, czy co najmniej jedna osoba ma ukończone 19 lat.
// Sprawdź, czy wszyscy mają powyżej 19 lat
// Wykorzystując funkcję find(), znajdź imie osoby urodzonej po 2000 roku

// Wykorzystując dodatkowo poniższą strukturę:

// const comments = [
//       { text: 'Love this!', id: 523423 },
//       { text: 'Super good', id: 823423 },
//       { text: 'You are the best', id: 2039842 },
//       { text: 'Ramen is my fav food ever', id: 123523 }
// ];

// Połącz elementy z listy comments oraz people do pojedynczych słowników zawartych w nowej liście opinions (obiekt opinions to końcowy efekt po połączeniu obiektów comments i people)

// const opinions = [
//     { name: 'Wes', year: 1988, text: 'Love this!', id: 523423},
//     { name: 'Kait', year: 1986, text: 'Super good', id: 823423 },
//     { name: 'Irv', year: 1970, text: 'You are the best', id: 2039842 },
//     { name: 'Lux', year: 2015, text: 'Ramen is my fav food ever', id: 123523 }

// ];


const people = [
     { name: 'Wes', year: 1988 },
     { name: 'Kait', year: 1986 },
     { name: 'Irv', year: 1970 },
     { name: 'Lux', year: 2015 }
];

class DataManipulator {
// Sprawdź, czy co najmniej jedna osoba ma ukończone 19 lat.
    isOnePersonOlderThenAge(age, array){
        return Object.values(array).some((person) => {
            const actualYear = new Date().getFullYear();              
            return (actualYear - person.year) > age;               
        })    
    }
// Sprawdź, czy wszyscy mają powyżej 19 lat
    isAllPeopleOlderThenAge(age, array){
        return Object.values(array).every((person) => {
            const actualYear = new Date().getFullYear();              
            return (actualYear - person.year) > age;               
        })    
    }
// Wykorzystując funkcję find(), znajdź imie osoby urodzonej po 2000 roku
    findOnePersonBornAfterYear(year, array){
        const person = Object.values(array).find((person) => person.year > year)
        return person.name;
    }
}
// creating object to use methods
const dataManipulator = new DataManipulator();
// methods
const bool = dataManipulator.isOnePersonOlderThenAge(19, people);
const bool2 = dataManipulator.isAllPeopleOlderThenAge(19, people);
const bool3 = dataManipulator.findOnePersonBornAfterYear(2000, people)
console.log(bool)
console.log(bool2)
console.log(bool3)

//------------------------------------------------------------
// Połącz elementy z listy comments oraz people do pojedynczych słowników zawartych w nowej liście opinions (obiekt opinions to końcowy efekt po połączeniu obiektów comments i people)

const comments = [
          { text: 'Love this!', id: 523423 },
          { text: 'Super good', id: 823423 },
          { text: 'You are the best', id: 2039842 },
          { text: 'Ramen is my fav food ever', id: 123523 }
    ];

const opinions = [];

for(let i = 0; i < comments.length && i < people.length; i++ ){
    opinions.push({...people[i],...comments[i]})
}

console.log(opinions);
