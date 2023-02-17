import CountriesGrid from "../features/CountriesGrid/CountriesGrid";
import UpperTab from "../features/UpperTab/UpperTab";

function MainView() {
  return (
    <div className="">
      <UpperTab /> // dark/light mode
      <CountriesGrid/> // with filtrs
    </div>
  );
}

export default MainView;
