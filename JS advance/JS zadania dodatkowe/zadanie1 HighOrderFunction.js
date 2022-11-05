// 1. Znajdź liczbę bohaterów
// 2. Ilu spośród bohaterów to kobiety?
// 3. Znajdź bohatera, który wystąpił w największej liczbie odcinków.
// 4. Ilu bohaterów zamieszuje Ziemię? (Earth (C-137))
// 5. Czy to prawda, że wśród bohaterów więcej jest żywych kobiet niż martwych mężczyzn (to z gwiazdką, trochę trudniejsze)
// 6. Znajdź bohaterów, którzy wstąpili w jednym odcinku
// 7. W ilu postaciach wystąpił "Rick"
// 8. Stwórz obiekt, opisujący płeć wraz z ilością bohaterów:
// przykładowa odpowiedź:
// {
// Female: 10,
// unknown: 2,
// Male: 5,
// }

import { characters } from "./arrayCharacters.js"
console.log(characters[0])

// number of heroes

const numberOfHeroes = characters.length
console.log('number of heroes', numberOfHeroes)

// number of women heroes 

const womenHeroes = characters.filter(e => {
    if (e.gender.includes("Female") == true) { return e };
})

console.log('number of women heroes', womenHeroes.length)

// most popular heroes

const mostPopulatHeroes = e =>{
    const mostPopulatHeroesArray = [];
    characters.forEach(e => {
        mostPopulatHeroesArray.push(e.episode.length)
})

    let temp = 0;
    mostPopulatHeroesArray.forEach(e => {
        if (temp < e){temp = e}
    })

    const mostPopulatHeroesName = characters.filter(e => {
        if (e.episode.length == temp) { return e.name }
    })
    console.log('most popular heroes are', mostPopulatHeroesName)
}
mostPopulatHeroes();

// how many of heroes live on Earth ( (Earth (C-137)) ) origin

    const heroesOnEarthArray = characters.filter(e => {
        if (e.origin.name.includes("Earth (C-137") == true) {return e}
    })

    console.log('number of heroes live on Earth ',heroesOnEarthArray.length)

// 5. Czy to prawda, że wśród bohaterów więcej jest żywych kobiet niż martwych mężczyzn (to z gwiazdką, trochę trudniejsze)

//return true if alive women > dead man

const aliveWomen = characters.filter(e => {
    if ((e.status.includes("Alive") == true) && (e.gender.includes("Female") == true)) {return e}
})
const deadMan = characters.filter(e => {
    if ((e.status.includes('Dead') == true) && (e.gender.includes("Male") == true)) { return e}
})

const moreAliveWomanThanManQuestion = e => {
    if (aliveWomen > deadMan) {return true}
    else { return false}
}

console.log('is more alivie woman than man ?',moreAliveWomanThanManQuestion());

// 6. Znajdź bohaterów, którzy wstąpili w jednym odcinku - every

const episodes = [];
const getEpisodes = characters.forEach(e => {
    episodes.push(e.episode)
})
console.log(episodes) //array of arrays with objects
// console.log(...episodes) //arrays with objects
const episodesMore = toString(episodes) 


console.log(episodesMore)
// nieeee, jeśli jakiś episod wystepuje wiecej niz raz, tak ma byc

// const same = e => {
//     episodes.
// }
// console.log(same)
// a();



