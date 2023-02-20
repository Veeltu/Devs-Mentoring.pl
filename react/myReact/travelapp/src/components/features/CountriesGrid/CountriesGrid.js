import axios from "axios";
import { useState, useEffect } from "react";
import CountriesCards from "../CountriesCards/CountreisCards";
import FilterByName from "../FilterByName/FilterByName";
import FilterByContinent from "../FilterByContinent/FilterByContinent";
import CountriesDetails from "../CountriesDetails/CountriesDetails";

const url = "https://restcountries.com/v3.1/";

function CountriesGrid() {
  const [jsonData, setJsonData] = useState([]);
  const [continent, setContinent] = useState("All");
  const [contFilter, setContFilter] = useState([]);
  const [inputText, setInputText] = useState("");
  const [detail, setDetail] = useState([]);
  const [detailCountry, setDetailCountry] = useState([]);

  console.log(`detail - ${detail}`);
  console.log(`detailCountry - ${JSON.stringify(detailCountry)}`);

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

  //filter for detail one country card
  useEffect(() => {
    let detailData = []; // starts empty
    if (detail !== []) {
      detailData = jsonData.filter((e) => e.name.common === detail);
    }
    setDetailCountry(detailData);
  }, [detail]);

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
    const filteredData = jsonData.filter((e) => {
      return e.name.common.toLowerCase().includes(inputText);
    });
    setContFilter(filteredData);
  }, [inputText]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      <div className="flex justify-between">
        <FilterByName setInputText={setInputText} />
        <FilterByContinent setContinent={setContinent} continent={continent} />
      </div>
      <div className="cursor-pointer">
        <CountriesCards data={contFilter} setDetail={setDetail} />
        {/* <CountriesDetails data={detailCountry}/> */}
      </div>
      //{" "}
    </div>
  );
}

export default CountriesGrid;
