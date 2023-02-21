import React from "react";

function CountriesDetails({ data }) {
  return (
    <div>
      <header style={{ color: "white" }}>
        <h1>Countries Details</h1>
      </header>
      <ul className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((e) => (
          <div
            // onClick={(e) => handleDetailsClick(e)}
            key={e.name.common}
            data-id={e.name.common}
            className="my-8 duration-300 bg-white rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 dark:bg-gray-800 hover:-translate-y-1"
          >
            <img
              className="object-cover w-full rounded-t h-72"
              alt="flag"
              src={e.flags.png}
            ></img>
            <div className="mb-4 text-lg font-bold leading-relaxed text-gray-800 dark:text-gray-300">
              <h2>{Object.values(e.name)[0]}</h2>
            </div>
            <div className="leading-5 text-gray-500 dark:text-gray-400">
              <div className="population">Population:{e.population}</div>
              <div className="region">Region:{e.region}</div>
              <div className="capital">Capital:{e.capital}</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CountriesDetails;
