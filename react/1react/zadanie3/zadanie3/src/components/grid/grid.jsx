import Card from "../card/card";
import Data from "../data/data.jsx";
import "./grid.css";

function Grid() {
  return (
    <div
      className="background"
      // style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="grid-container">
        {
          Data.map(person => (
            <div className="container">
              <Card
                name={person.name}
                surname={person.surname}
                avatar={person.avatar}
                backgroundImg={person.background}
                bronze={person.bronze}
                silver={person.silver}
                gold={person.gold}
            />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Grid;
