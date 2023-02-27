
export default function getCountryDataInfo(country) {
    console.log(country)
    let countryData = country
      ? {
          name: country.name.common,
          "native name":
            country.name.nativeName[Object.keys(country.name.nativeName)[0]]
              .common,
          population: country.population,
          region: country.region,
          "sub region": country.subregion,
          capital: country.capital ? country.capital[0] : null,
          "top level domain": country.tld ? country.tld[0] : "none",
          currencies: country.currencies
            ? country.currencies[Object.keys(country.currencies)[0]].name
            : [],
          languages: country.languages
            ? Object.values(country.languages).join(", ")
            : "",
          "border countries": country.borders,
          flag: country.flags.svg,
          coatOfArms: country.coatOfArms.svg,
        }
      : {};
  
    return countryData;
  }
  
export default function BorderCountries(props) {
    const { countries, borderSigns } = props;
    const neighbours = borderSigns
      ? borderSigns.map((sign) => {
          for (let i = 0; i < countries.length; i++) {
            if (countries[i].cca3 == sign)
              return {
                name: countries[i].name.common,
                linkName: countries[i].name.common
                  .replace(/\s+/g, "_")
                  .toLowerCase(),
              };
          }
        })
      : [];
  
    if (!borderSigns) return;
    return (
      <div className=" sm:col-span-2 sm:mt-2">
        <h2 className="mb-4 text-base font-bold">border countries</h2>
        <div className="flex flex-wrap gap-2">
          {neighbours.map((border, index) => {
            return (
              <Link
                to={`${baseUrl}${border.linkName}`}
                key={index}
                className="bg-White dark:bg-DarkBlue p-[.3em] px-[1.3em] rounded-sm drop-shadow-lg "
              >
                {border.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }