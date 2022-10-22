/**
 * 
 */
// craea
//! adwa
//? dwada
//* ada


const countriesAPI = 'https://restcountries.com/v3.1/all' 
const catsAPI = 'https://api.thecatapi.com/v1/breeds' 

//* --- GET DATE FROM API 

let countries = new Array; 
//? why that array don't work like array ?

fetch(countriesAPI)
.then(res => res.json())

// FIRST WAY TO CREATE ARRAY OF OBJECTS

// .then(json => countries = json.map(e => ({ country: e.name.common, capital: e.capital, area: e.area, languages: e.languages, population: e.population})
// ))

// SECOND WAY TO CREATE ARRAY OF OBJECTS

.then(data => Object.values(data).forEach(e => {

	const countriesInfo = {country: e.name.common, capital: e.capital, area: e.area, languages: e.languages, population: e.population}

	countries.push(countriesInfo);
}
))


//* --- CATS

const catNames = [];

fetch(catsAPI)
.then(res => res.json())
// .then(data => console.log(data))
.then(data => Object.values(data).forEach(e => {
	const catName = {cat_name: e.name}
	catNames.push(catName)
}))

//* --- 10 LARGEST AREA

let testArray = [
	{id:1 ,country: "Poland", capital:"Warsaw", area: 112 },
	{id:2 ,country: "Niemcy", capital:"Berlin", area: 567 },
	{id:3 ,country: "Rosja", capital:"Moskwa", area:324 },
	{id:4 ,country: "Brazylia", capital:"Brazylia", area:164 },
	{id:5 ,country: "UK", capital:"Londyn", area:632 },
	{id:6 ,country: "Francja", capital:"Paryż", area:423 },
]

// let newArray = testArray.map(e => {return e}) //! its empty why?
let newArray = countries.map(e => {return e}) //! its empty why?





let largest = Math.max.apply(Math,testArray.map(e => {return e.area}))

let sortTestArray = testArray.sort((a, b) => b.area - a.area)
let largestAreaTestArray = sortTestArray.slice(0,3)

//? why it works on newArray and don't on countries ?
//? why countries get -infinity ? no arguments ? why ?


// 10 biggest countries - population
// same way

//* promise and async.await



