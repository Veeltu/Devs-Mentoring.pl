import "./App.css";
import MainView from "./components/views/MainView";
import UpperTab from "./components/features/upperTab/upperTab";


function App() {
  return (
    <div className="App">
      <UpperTab/>
      <MainView/>
    </div>
  );
}

export default App;
