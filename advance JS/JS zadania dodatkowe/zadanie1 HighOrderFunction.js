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

import { characters } from "./arrayCharacters.js";
console.log(characters[0]);

// number of heroes

const numberOfHeroes = characters.length;
console.log("number of heroes", numberOfHeroes);

// number of women heroes

const womenHeroes = characters.filter((e) => e.gender === "Female").length;

// e.gender == "Female"
// e.gender.includes("Female") => Females male

console.log("number of women heroes", womenHeroes);

// most popular heroes

const mostPopulatHeroes = (e) => {
  let max = characters.reduce(
    (acc, cur) => (cur.episode.length > acc ? cur.episode.length : acc),
    0
  );

  const mostPopulatHeroesName = characters.filter(
    (e) => e.episode.length == max
  );
  console.log("most popular heroes are", mostPopulatHeroesName);
};
mostPopulatHeroes();

// how many of heroes live on Earth origin

const heroesOnEarthArray = characters.filter((e) =>
  e.origin.name.includes("Earth")
);

console.log("number of heroes live on Earth ", heroesOnEarthArray.length);

// 5. Czy to prawda, że wśród bohaterów więcej jest żywych kobiet niż martwych mężczyzn (to z gwiazdką, trochę trudniejsze)

//return true if alive women > dead man

const aliveWomen = characters.filter(
  (e) => e.status.includes("Alive") && e.gender.includes("Female")
);
const deadMan = characters.filter(
  (e) => e.status.includes("Dead") && e.gender.includes("Male")
);

const moreAliveWomanThanManQuestion = (aliveWomen, deadMan) => {
  // funkcja czysta
  return aliveWomen > deadMan;
};

console.log(
  "is more alivie woman than man ?",
  moreAliveWomanThanManQuestion(aliveWomen, deadMan)
);

// 6. Znajdź bohaterów, którzy wstąpili w jednym odcinku

const oneEpisodeHero = characters.filter((e) => e.episode.length == 1);

console.log("one time episode heros", oneEpisodeHero);

// 7. W ilu postaciach wystąpił "Rick"

const findRick = characters.filter((e) => e.name.includes("Rick"));
console.log("how many times rick appear ", findRick.length);

//8. Stwórz obiekt, opisujący płeć wraz z ilością bohaterów:
// przykładowa odpowiedź:
// {
// Female: 10,
// unknown: 2,
// Male: 5,
// }

const newObject = characters.reduce((acc, cur) => {
  if (acc[cur.gender]) {
    acc[cur.gender] += 1;
  } else {
    acc[cur.gender] = 1;
  }
  return acc;
}, {});

console.log(newObject);
