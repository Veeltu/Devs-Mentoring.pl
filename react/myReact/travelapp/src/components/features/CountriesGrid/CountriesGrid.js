import axios from "axios";
import { useState, useEffect } from "react";
import CountriesCard from "../CountriesCard/CountreisCard";
import { v4 as uuidv4 } from "uuid";

const url = "https://restcountries.com/v3.1/";

function CountriesGrid() {
  const [jsonData, setJsonData] = useState([]);
  const [continents, allContinents] = useState([
    "Asia",
    "Americas",
    "Africa",
    "Europe",
  ]);
  const [continent, setContinent] = useState("All");
  const [contFilter, setContFilter] = useState(jsonData);
  //search input 
  const [inputText, setInputText] = useState([]);
  const [searchData, setSearchData]= useState([])
  const [coutriesNames, setCountriesNames] = useState([])


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
  }, [continent]);
   
  //create array with names, filter with names !

  // {Object.values(e.name)[0]}

    const filteredJsonData = .filter((e) => {
      //if no input return orginal
    if (inputText === "") {
      return e;
    }
    //return item which contains the iser input
    else {
      return e.text.toLowerCase().includes(inputText)
    }
  })

// console.log(coutriesNames)
// console.log(filteredJsonData)
  // console.log(inputText)
  // console.log(searchData)

  // const filterJsonData = jsonData.filter(name => {
  //   String(name).includes(inputText).map((filteredName) => {
  //     <li>
  //       {filteredName}
  //     </li>
  //   })
  // })

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      {/* // filters */}
      <div className="flex justify-between">
        <div>
          <div className="relative block ">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              name="search"
              id="id"
              onChange={(e) => setInputText(e.target.value.toLowerCase())}
            />
          </div>
     
        </div>

        <select
          onChange={(e) => setContinent(e.target.value)}
          className=" block bg-white w-full max-w-sm border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        >
          <option value="All">All</option>
          {continents.map((e) => (
            <option key={uuidv4()} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      {/* // card list */}
      <CountriesCard data={contFilter} />
    </div>
  );
}

export default CountriesGrid;
