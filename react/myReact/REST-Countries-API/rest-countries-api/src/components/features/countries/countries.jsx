import "./countries.css";

const Countries = ({data}) => {

  return (
    <ul className="list">
      {data.map((e) => (
        // <CountryCard country={e}/>
        <div key={e.area} className="card">
          <img className="flag" alt="flag" src={e.flags.png}></img>
          <div className="country-info">
            <div className="name">
              <h2>{Object.values(e.name)[0]}</h2>
            </div>
            <div className="population">Population:{e.population}</div>
            <div className="region">Region:{e.region}</div>
            <div className="capital">Capital:{e.capital}</div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Countries;
