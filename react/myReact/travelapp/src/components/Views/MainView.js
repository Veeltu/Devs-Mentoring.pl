import CountriesGrid from "../features/CountriesGrid/CountriesGrid";
import UpperTab from "../features/UpperTab/UpperTab";

function MainView() {
  return (
    <div className="bg-VeryLightGray">
      <UpperTab /> 
      <CountriesGrid/> 
    </div>
  );
}

export default MainView;
