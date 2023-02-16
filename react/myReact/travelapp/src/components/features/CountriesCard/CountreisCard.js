import { v4 as uuidv4 } from "uuid";

const CountriesCard = ({ data }) => {

  return (
    <ul className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((e) => (
        <div
          key={uuidv4()}
          className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
        >
          <img
            className="rounded-t h-72 w-full object-cover"
            alt="flag"
            src={e.flags.png}
          ></img>
          <div className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
            <h2>{Object.values(e.name)[0]}</h2>
          </div>
          <div className="leading-5 text-gray-500 dark:text-gray-400">
            <div className="population">Population:{e.population}</div>
            <div className="region">Region:{e.region}</div>
            <div className="capital">Capital:{e.capital}</div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default CountriesCard;
