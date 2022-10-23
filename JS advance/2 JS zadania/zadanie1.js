
const countriesAPI = 'https://restcountries.com/v3.1/all' 
const countriesInfoArray = [];
const countriesSpecificInfoArray = [];
const ten = [];

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
    let sortCountries = Object.values(countriesSpecificInfoArray).sort((a,b) => b.area - a.area)
    let tenLargestCountries = sortCountries.slice(0,10)
    console.log(tenLargestCountries)
    ten.push(tenLargestCountries)
}
)
console.log(ten)

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