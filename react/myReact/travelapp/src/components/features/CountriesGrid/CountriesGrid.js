import axios from "axios";
import { useState, useEffect } from "react";
import CountriesCards from "../CountriesCards/CountreisCards";
import FilterByName from "../FilterByName/FilterByName";
import FilterByContinent from "../FilterByContinent/FilterByContinent";

const url = "https://restcountries.com/v3.1/";

function CountriesGrid() {
  const [jsonData, setJsonData] = useState([]);
  const [continent, setContinent] = useState("All");
  const [contFilter, setContFilter] = useState([]);
  const [inputText, setInputText] = useState("");
  // console.log(inputText);
  const [detail, setDetail] = useState([]);

  console.log(detail);
  const handleClick = (e) => {
    const a = e.target.value;
    setDetail(a);
  };

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

  //continent filter
  useEffect(() => {
    let result = jsonData;
    if (continent !== "All") {
      result = result.filter((e) => e.region === continent);
    }
    setContFilter(result);
  }, [continent]);

  //name filter
  useEffect(() => {
    const filteredData = contFilter.filter((e) => {
      // if no input return orignal
      if (inputText === " ") {
        return e;
      }
      //return the item which contains the user input
      else {
        return e.name.common.toLowerCase().includes(inputText);
      }
    });
    setContFilter(filteredData);
  }, [inputText]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      <div className="flex justify-between">
        <FilterByName setInputText={setInputText} />
        <FilterByContinent setContinent={setContinent} continent={continent} />
      </div>
      <CountriesCards onClick={handleClick} data={contFilter} />
    </div>
  );
}

export default CountriesGrid;
