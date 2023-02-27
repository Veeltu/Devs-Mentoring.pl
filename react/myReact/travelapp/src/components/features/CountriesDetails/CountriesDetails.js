import React from "react";

function CountriesDetails({ data, jsonData }) {
  console.log(data);

  // jeżeli e(cca3) === cca3 to name.common - pętla 

  const bordersCountrysCca3 = data.map((e) =>
    <ul>{e}</ul>
  )
  


  return (
    <main className="w-[90%] max-w-md lg:max-w-6xl mx-auto capitalize py-14 relative">
      <button
        className="bg-White dark:bg-DarkBlue p-[.3em] px-[1.2em] rounded-sm mb-9 flex gap-2 
    items-center text-sm drop-shadow-md "
      >
        GET BACK
      </button>
      <div className="grid justify-center mx-auto lg:gap-5 dark:text-White lg:grid-cols-2 lg:justify-between lg:text-left ">
        {data.map((e) => (
          <div
            key={e.name.common}
            data-id={e.name.common}
            className="container grid grid-cols-2 m-auto"
          >
            <img
              className=" bg-VeryLightGray"
              alt="flag"
              src={e.flags.png}
            ></img>
            <div className="grid lg:grid-cols-2 gap-x-5">
              <div className="flex items-center gap-2 mb-4 text-lg font-bold sm:text-2xl lg:mb-5 sm:col-span-2 sm:gap-3">
                <h2>{e.name.common}</h2>
              </div>
              <div className="mb-5 column1 lg:mb-0 ">
                <div className="nativname">
                  Native Name:{" "}
                  {e.name.nativeName[Object.keys(e.name.nativeName)[0]].common}
                </div>
                <div className="population">Population:{e.population}</div>
                <div className="region">Region:{e.region}</div>
                <div className="subregion">Sub Region:{e.subregion}</div>
                <div className="capital">Capital:{e.capital}</div>
              </div>
              <div className="column2 ">
                <div className="topLevelDomain">
                  Top Level Domain: {e.tld ? e.tld[0] : "none"}
                </div>
                <div className="curencies">
                  Curencies:{" "}
                  {e.currencies
                    ? e.currencies[Object.keys(e.currencies)[0]].name
                    : []}
                </div>
                <div className="languages">
                  Languages:{" "}
                  {e.languages ? Object.values(e.languages).join(", ") : ""}
                </div>
              </div>
            </div>
            <div className="flex flex-row borders ">
              Border countries:{" "}
              {e.borders
                ? e.borders.map((e) => (
                    <ul className="cursor-pointer bg-White dark:bg-DarkBlue p-[.3em] px-[1.3em] m-4 rounded-sm drop-shadow-lg ">
                      {e}
                    </ul>
                  ))
                : []}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default CountriesDetails;



