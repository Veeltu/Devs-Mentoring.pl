import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function FilterByContinent({ setContinent, continent }) {
  //list of cont. for filter
  const [continents, allContinents] = useState([
    "Asia",
    "Americas",
    "Africa",
    "Europe",
  ]);

  return (
    <div>
      <select
        // onChange={(e) => setContinent(e.target.value)}
        onChange={(e) => setContinent(e.target.value)}
        className=" block bg-white w-full max-w-sm border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      >
        <option value="All">{continent}</option>
        {continents.map((e) => (
          <option key={uuidv4()} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterByContinent;
