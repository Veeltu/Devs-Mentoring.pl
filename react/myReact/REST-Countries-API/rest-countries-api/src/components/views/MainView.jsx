import Countries from "../features/countries/countries";
import { countriesData } from "../../data/countries";
import { useState, useEffect } from "react";

const MainView = () => {
  /*
    1. Dodać select po kontynencie
    2. Wartosci z selecta przechowywac w useState
    3. filter uruchamiany jest tylko wtedy, gdy zmienia sie wybrany kontynent (useEffect)
    TODO: how to filter ALL ?
    */

  const [continent, setContinent] = useState("Asia");
  const [contFilter, setContFilter] = useState([]); //important : this have to be [], for map function

  useEffect(() => {
    const b = countriesData.filter((e) => e.region === continent);
    setContFilter(b)
    // console.log(b)
  }, [continent]);

  // console.log(contFilter) // works

  return (
    <div className="body">
      <div className="container m-5">
        <select className="custom-select">
          <option onClick={() => setContinent("Asia")} value="Asia">
            Asia
          </option>
          <option onClick={() => setContinent("Americas")} value="Americas">
            Americas
          </option>
          <option onClick={() => setContinent("Africa")} value="Africa">
            Africa
          </option>
          <option onClick={() => setContinent("Europe")} value="Europe">
            Europe
          </option>
          {/* <option onClick={() => setContinent()} value="All">
            All // TODO : how to get filter with all   ====>>>>  try useState(false)
          </option> */}
        </select>
      </div>
      <Countries data={contFilter} />
    </div>
  );
};

export default MainView;
