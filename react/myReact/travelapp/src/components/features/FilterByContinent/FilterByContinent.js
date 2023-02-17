import React from "react";
import { useState } from "react";

function FilterByContinent({ setContinent }) {
  //list of cont. for filter
  const [continents, allContinents] = useState([
    "All",
    "Asia",
    "Americas",
    "Africa",
    "Europe",
  ]);

  return (
    <div>
      <select
        onChange={(e) => setContinent(e.target.value)}
        className=" block bg-white w-full max-w-sm border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      >
        {continents.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterByContinent;
