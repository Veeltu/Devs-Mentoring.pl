// Challenge 4
// Pobierz listę wszystkich państw i informacji o nich z poniższego API:
// https://restcountries.com
// Przefiltruj te państwa w taki sposób, aby uzyskać tylko te, których populacja przekracza 37 milionów ludzi.
// Oblicz średnią zaludnienia państw z każdego kontynentu.
// Znajdź państwa, które mają największe zaludnienie z każdego kontynentu
// Znajdź najczęściej wykorzystywane języki, podawaj również informacje, ile razy pojawiły się na liście wszystkich państw.

const countriesAPI = "https://restcountries.com/v3.1/all";

async function countriesJSON() {
  const response = await fetch(countriesAPI);
  const countriesInfo = await response.json();
  return countriesInfo;
}

countriesJSON().then((countriesInfo) => {
  //* countries which have more than 37kk population

  // show countries witch population more than "number"
  const populationMoreThan37 = countriesInfo.filter(
    (e) => e.population > 37000000
  );

  //* population mean in each continent

  // target continent name witch is in array
  const getContinent = (continentName) =>
    countriesInfo.filter((e) => e.continents[0] === continentName);

  // population in specific continent
  const populationArray = (specificContinent) =>
    specificContinent.map((e) => e.population);

  // console.log(populationArray(getContinent('Asia')))

  // mean (średnia) specific continent

  const mean = (specificContinent) => {
    return populationArray(specificContinent).reduce(
      (total, amount, index, array) => {
        total += amount;
        if (index === array.length) {
          return total / array.length;
        }
        return total;
      }
    );
  };

  const mean2 = (specificContinent) =>
    populationArray(specificContinent).reduce(
      (total, amount, index, array) => total + amount / array.length,
      0
    );

  // console.log(mean(getContinent('Asia'))); (2+4+23+4+2)/5 == 2/5 + 4/5 + 23/5 + 4/5 + 2/5

  //* find countries witch largest population in continents

  const newReduce = (getContinent) => {
    return getContinent.reduce(
      (acc, cur) => (acc.population > cur.population ? acc : cur),
      { population: 0 }
    );
    //const findCounty = getContinent.find(e => e.population === maxPopulation)
    //
    //return findCounty.name.common
  };
  // console.log(newReduce(getContinent('Asia')))

  //* find most popular languages ,and show how many time they appear

  // console.log(countriesInfo)

  let result = countriesInfo.reduce((acc, cur) => {
    if (!cur.languages) return acc;

    Object.values(cur.languages).forEach((e) => {
      if (acc[e]) {
        acc[e] = acc[e] + 1;
      } else {
        acc[e] = 1;
      }
    });

    return acc;
  }, {});

  console.log(result);
});
