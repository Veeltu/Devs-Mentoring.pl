import "./App.css";
import Card from "./components/card/card.jsx";
import Data from "./data/data.jsx";

function App() {
  const names = Data.map((e) => e.name);
  const surnames = Data.map((e) => e.surname);
  const avatarData = Data.map((e) => e.avatar);
  const backgroundImg = Data.map((e) => e.background);
  const bronze = Data.map((e) => e.bronze);
  const silver = Data.map((e) => e.silver);
  const gold = Data.map((e) => e.gold);

  // jak zmieniac to [0] lepiej ?
  return (
    <Card
      name={names[0]}
      surname={surnames[0]}
      avatar={avatarData[0]}
      backgroundImg={backgroundImg[0]}
      bronze={bronze[0]}
      silver={silver[0]}
      gold={gold[0]}
    />
  );
}

export default App;
