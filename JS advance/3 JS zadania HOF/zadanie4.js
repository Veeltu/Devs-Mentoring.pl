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
        const populationMoreThan = (populationNumber) => {
            return countriesInfo.filter(e => {return e.population > populationNumber})
        }
        // console.log(populationMoreThan(37000000))

//* population mean in each continent 

    // target continent name witch is in array
        const getContinent = (continentName) => { 
            return countriesInfo.filter(e => {
                return e.continents[0] === continentName
            })
        }
    // population in specific continent     
        const populationArray = (specificContinent) => {
            return specificContinent.map(e => {
                return e.population
            })
        }

        // console.log(populationArray(getContinent('Asia')))
    
    // mean (średnia) specific continent

        const mean = (specificContinent) => {
            return populationArray(specificContinent).reduce((total, amount, index, array)=>{
                total += amount;
                if(index ===array.length){ 
                    return total/ array.length}
                return total;
            })
        }
        // console.log(mean(getContinent('Asia')));

//* find countries witch largest population in continents

        const largestPopulationCountryInContinent = (getContinent) => {
            // max population number from array
            let maxPopulation =  Math.max(...(populationArray(getContinent)));
            
            // return country with === maxPopulation
            const country = Object.values(getContinent).find(e => e.population === maxPopulation);
            return country.name.common;
        } 
        
        // console.log(largestPopulationCountryInContinent(((getContinent('Europe')))));
        
//* find most popular languages ,and show how many time they appear

     
        // TODO: cant target objects values


        const myArray = [];
        const mostPopularLanguages = (countriesInfo) => {
            const languagesArray = countriesInfo.map(e => {
                return e.languages
            })
            // myArray.push(...languagesArray)
            // return languagesArray
            // const find = languagesArray.map(e => { return e})
            const find = languagesArray.map(e => { return Object.values(e)})
            return find;
        } 
        console.log(mostPopularLanguages(countriesInfo))

        // PLAN => 
// dwie zmienne 1. array wszystkich 2. mapa bez duplikatow 3. wyciągnąć pojedyncze nazwy 4. jak często pojawiaja się nazwy i ile razy 5. sort by numbers

        
        // console.log(mostPopularLanguages(countriesInfo));
        
    })



// DUPLICATES
            // const mySet = new Set();

            // const filteredArr = languagesArray.filter(e => {
            //     const duplicate = mySet.has(e.id);
            //     mySet.add(e.id);
            //     return !duplicate;
            // });

            // return filteredArr

//notes 

            // const arr = [ //8 objects
            // { aame: "test1" },
            // { bame: "test3" },
            // { came: "test3" },
            // { dame: "test3" },
            // { eame: "test1" },
            // { fame: "test3" },
            // { game: "test3" },
            // { hame: "test3" },
            // ];
            // const filter = arr.map(e => { return Object.values(e)})
            // console.log(filter)

