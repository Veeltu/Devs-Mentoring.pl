import Card from "../card/card";
import Data from "../data/data.jsx";
import "./grid.css";

function Grid() {
  const names = Data.map((e) => e.name);
  const surnames = Data.map((e) => e.surname);
  const avatarData = Data.map((e) => e.avatar);
  const backgroundImg = Data.map((e) => e.background);
  const bronze = Data.map((e) => e.bronze);
  const silver = Data.map((e) => e.silver);
  const gold = Data.map((e) => e.gold);

  // jak zmieniac to [0] lepiej ?
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
                backgroundImg={person.backgroundImg}
                bronze={person.bronze}
                silver={person.silver}
                gold={person.gold}
            />
            </div>
          ))
        }
      </div>
      {/* <Card
        name={names[0]}
        surname={surnames[0]}
        avatar={avatarData[0]}
        backgroundImg={backgroundImg[0]}
        bronze={bronze[0]}
        silver={silver[0]}
        gold={gold[0]}
      />
      <Card
        name={names[1]}
        surname={surnames[1]}
        avatar={avatarData[1]}
        backgroundImg={backgroundImg[0]}
        bronze={bronze[1]}
        silver={silver[1]}
        gold={gold[1]}
      /> */}
    </div>
  );
}

export default Grid;
