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
  const [detail, setDetail] = useState();
  const [detailCountry, setDetailCountry] = useState([]);
  const [detailView, setDetailView] = useState(false);

  console.log(`detail - ${detail}`);

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
    if (detail !== [])
      detailData = jsonData.filter((e) => e.name.common === detail);
    setDetailCountry(detailData);
    setDetailView((wasOpened) => !wasOpened);
  }, [detail]);

  //continent filter
  useEffect(() => {
    let result = jsonData;
    if (continent !== "All")
      result = result.filter((e) => e.region === continent);
    setContFilter(result);
  }, [continent]);

  //name filter
  useEffect(() => {
    const filteredData = jsonData.filter((e) => {
      return e.name.common.toLowerCase().includes(inputText);
    });
    setContFilter(filteredData);
  }, [inputText]);

  const button =(e) => {
    // setDetail(null); // kiedy zmienia sie detail odpala sie filter z setDetail/ sposób na celearowanie state bez odpalania useEffect ?
    setDetailView((wasOpened) => !wasOpened);

  }

  return (
    <>
      <div className="px-12 py-10 bg-gray-100 dark:bg-BackgroundDarkBlue">
        {detailView ? (
          <>
            <div className="flex justify-between">
              <FilterByName setInputText={setInputText} />
              <FilterByContinent
                setContinent={setContinent}
                continent={continent}
              />
            </div>
            <div className="cursor-pointer">
              <CountriesCards data={contFilter} setDetail={setDetail} />
            </div>
          </>
        ) : (
          <>
          <CountriesDetails data={detailCountry} />
          <button onClick={button} style={{height:"20px", color:"white"}}>GETBACK </button>
          </>
        )}
      </div>
    </>
  );
}

export default CountriesGrid;
