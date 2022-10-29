// Challenge 4
// Pobierz listę wszystkich państw i informacji o nich z poniższego API:
// https://restcountries.com
// Przefiltruj te państwa w taki sposób, aby uzyskać tylko te, których populacja przekracza 37 milionów ludzi. 
// Oblicz średnią zaludnienia państw z każdego kontynentu. 
// Znajdź państwa, które mają największe zaludnienie z każdego kontynentu
// Znajdź najczęściej wykorzystywane języki, podawaj również informacje, ile razy pojawiły się na liście wszystkich państw. 

const countriesAPI ='https://restcountries.com/v3.1/all'; 

async function countriesJSON(){
    const response = await fetch (countriesAPI);
    const countriesInfo = await response.json();
    return countriesInfo;
}

countriesJSON()
    .then(countriesInfo => {
        
//* countries which have more than 37kk population
        
    // show countries witch population more than "number"
        function populationMoreThan (populationNumber) {
            return Object.values(countriesInfo).filter((e) => {
                return e.population > populationNumber;
            })
        }
        // console.log(populationMoreThan(37000000))

//* population mean in each continent 

    // target continent name witch is in array
    function getContinent(continentName) { 
            return Object.values(countriesInfo).filter((e) => {
                return e.continents[0] === continentName;
            })
        }

        // population in specific continent     
        function populationArray(specificContinent){
            const populationArray = [];
            Object.values(specificContinent).forEach(e => {
                return populationArray.push(e.population)
            })
            return populationArray;
        }
        // console.log(populationArray(getContinent('Asia')))
    
    // mean (średnia) specific continent
        function mean (specificContinent) {
            return populationArray(specificContinent).reduce((total, amount, index, array)=>{
                total += amount;
                if(index ===array.length){ return total/ array.length}
                return total;
            })
        }
        // console.log(mean(getContinent('Asia')));
  
//* find countries witch largest population in continents
        
        function largestPopulationCountryInContinent (getContinent) {
            // max population number from array
            let maxPopulation =  Math.max(...(populationArray(getContinent)));
            
            // return country with === maxPopulation
            const country = Object.values(getContinent).find(e => e.population === maxPopulation);
            return country.name.common;
        }
        
        // console.log(largestPopulationCountryInContinent(((getContinent('Europe')))));
        
//* find most popular languages ,and show how many time they appear

        // function mostPopularLanguages (a) {
        //    const languagesArray = [];// 250 objects with languages in array

        //    Object.values(a).forEach(e => {
        //           console.log(Object.values(e.languages)[0])
        //     })
        //     console.log(languagesArray)
        // }


        // function mostPopularLanguages (a) {
        //    return Object.values(a).forEach(e => {
        //     // console.log(e)
        //     return e.population[0];
        //    })
        // }

        
        // PLAN => robimy z e.languages map(by wyszczegolnic jezyki - bez duplikatow) i za ich pomoca szukamy duplikatow w wielkiej tablicy wyszstkich jezykow - easy
// dwie zmienne 1. array wszystkich 2. mapa bez duplikatow

        
        console.log(mostPopularLanguages(countriesInfo));
        
    })