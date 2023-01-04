import Countries from "../features/countries/countries";
import { countriesData } from "../../data/countries";
// useState, useEffect
const MainView = () => {
  /*
    1. Dodać select po kontynencie
    2. Wartosci z selecta przechowywac w useState
    3. filter uruchamiany jest tylko wtedy, gdy zmienia sie wybrany kontynent (useEffect)
  */
  const continentAfrica = countriesData.filter((e) => e.region === "Africa"); // TODO: dodać hooki 

  

  console.log(continentAfrica);

  return (
    <div className="body">
      <Countries data={continentAfrica} />
    </div>
  );
};

export default MainView;

