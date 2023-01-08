import Countries from "../features/countries/countries";
import { countriesData } from "../../data/countries";
import { useState, useEffect } from "react";
// useState, useEffect
const MainView = () => {
  /*
    1. Dodać select po kontynencie
    2. Wartosci z selecta przechowywac w useState
    3. filter uruchamiany jest tylko wtedy, gdy zmienia sie wybrany kontynent (useEffect)
  */
 
 const [continent, setContinent] = useState();
 const [continentFilter, setContinentFilter] = useState();

 useEffect(() => {
    const continentFIlter = countriesData.filter((e) => e.region === continent); // TODO: dodać hooki 
    setContinentFilter(continentFIlter)
  }) //when

// onClick "Africa" set continent ==="Africa" => filter and set props
  


  return (
    <div className="body">
      <button onClick={() => setContinent("Africa")}><code>set Africa</code></button>
      <Countries data={continentFilter} />
    </div>
  );
};

export default MainView;

