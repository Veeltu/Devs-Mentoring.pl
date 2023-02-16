import axios from "axios";
import { useState, useEffect } from "react";
import CountriesCard from "../CountriesCard/CountreisCard";
import { v4 as uuidv4 } from "uuid";
import FilterByName from "../FilterByName/FilterByName";
import FilterByContinent from "../FilterByContinent/FilterByContinent";

const url = "https://restcountries.com/v3.1/";

function CountriesGrid() {
  //fetchin data
  const [jsonData, setJsonData] = useState([]);

  const [contFilter, setContFilter] = useState(jsonData);

  const [continent, setContinent] = useState("All");

  const [nameFilter, setNameFilter] = useState([])

  console.log(`continent = ${continent}`)
  // console.log(`contFilter = ${contFilter}`)

  //fetch data
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(url + "all");
        setJsonData(resp.data);
        setContFilter(resp.data);
      } catch (error) {
        console.log(error.data);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    let result = jsonData;
    if (continent !== "All") {
      result = result.filter((e) => e.region === continent);
    }
    setContFilter(result);
    setNameFilter(result);
  }, [continent]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      <div className="flex justify-between">

        {/* <FilterByName data={setNameFilter} /> */}
        
        <FilterByContinent setContinent={setContinent} continent={continent} /> //render 2 times why ?
      </div>
      <CountriesCard data={contFilter} />
    </div>
  );
}

export default CountriesGrid;
