
const countriesAPI = 'https://restcountries.com/v3.1/all' 
const countriesInfoArray = [];
const countriesSpecificInfoArray = [];

async function countriesJSON(){
    const response = await fetch (countriesAPI);
    const countriesInfo = await response.json();
    return countriesInfo;
}
countriesJSON().then(countriesInfo => {
        Object.values(countriesInfo).forEach(e => {
            let countriesSpecificInfo = {
                // country: e.name.common, 
                // capital: e.capital, 
                // languages: e.languages, 
                // population: e.population,
                area: e.area
            }
        countriesSpecificInfoArray.push(countriesSpecificInfo)
    })
}
)
// console.log(countriesInfoArray)
// console.log(countriesSpecificInfoArray)


//* first 10 largest area
// let sortCountries = Object.entries(countriesSpecificInfoArray).sort((a,b) => b.area - a.area)
let sortCountries = countriesSpecificInfoArray.sort(a => a.area)
let tenLargestCountries = sortCountries.slice(0,3)
console.log(countriesSpecificInfoArray)
// console.log(sortCountries)
// console.log(tenLargestCountries)
console.log(countriesSpecificInfoArray.length)





//* --- CATS

const catsAPI = 'https://api.thecatapi.com/v1/breeds' 
const catNames = [];

async function functionCatsNames() {
    const response = await fetch(catsAPI)
    const catsJson = await response.json();
    return catsJson;
}
functionCatsNames().then(catsJson => {
    // console.log(catsJson)
    Object.values(catsJson).forEach(e => {
        // console.log(e)
        const catNamesJson = { name: e.name}
        catNames.push(catNamesJson)
    })
})

// console.log(catNames)