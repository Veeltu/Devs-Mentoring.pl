import Countries from "./countries/countries";
import { countriesData } from "..//data/countries";

const Body = () => {
  const continentAfrica = countriesData.filter((e) => e.region === "Africa");
  console.log(continentAfrica);

  return (
    <div className="body">
      <Countries data={continentAfrica} />
    </div>
  );
};

export default Body;

// how to set up "key" ?
