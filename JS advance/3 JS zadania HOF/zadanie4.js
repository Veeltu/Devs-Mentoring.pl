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
countriesJSON().then(countriesInfo => {
        Object.values(countriesInfo).forEach(e => {
            let countriesSpecificInfo = {
                country: e.name.common, 
                capital: e.capital, 
                languages: e.languages, 
                population: e.population,
                area: e.area
            }
            return;
        })
        console.log(countriesInfo)
        console.log(countriesSpecificInfo)
    
}
)
