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
  const [continents, allContinents] = useState(["Asia", "Americas", "Africa", "Europe"])
  const [continent, setContinent] = useState("All");
  const [contFilter, setContFilter] = useState([]); //important : this have to be [], for map function

  useEffect(() => {
    let result = countriesData
    if(continent !== 'All'){
      result = result.filter((e) => e.region === continent);
    } 
    setContFilter(result)
  }, [continent]);

  // console.log(contFilter) // works
  return (
    <div className="body">
      <div className="container m-5">
        <select onChange={(e)=> setContinent(e.target.value)} className="custom-select">
          <option value="All">
            All
          </option>
          {continents.map(e=>(
              <option key={e} value={e}>
                {e}
              </option>
          ))}
        </select>
      </div>
      <Countries data={contFilter} />
    </div>
  );
};

export default MainView;
