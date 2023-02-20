import React from "react";

function CountriesDetails({data}) {
  return (
    <div>
      <header></header>
      <main>
        {/* column1 */}
        <section>
          <img src={data.flags.png}>FLAG</img>
        </section>
        {/* column2 */}
        <section>
          <div >
            <h2>
                {Object.values(data.name)[0]}
                </h2>
          </div>
          <div >
            <div className="population">Population:
            {data.population}
            </div>
            <div className="region">Region:
            {data.region}
            </div>
            <div className="capital">Capital:
            {data.capital}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CountriesDetails;
