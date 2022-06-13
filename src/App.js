import "./App.css";
import logo from "./Assets/logo.svg";
import TipCalculator from "./Components/TipCalculator";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Splitter logo." />
      <TipCalculator />
    </div>
  );
}

export default App;
