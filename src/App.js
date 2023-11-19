import { logDOM } from "@testing-library/react";
import "./App.css";
import logo from "./stretch-logo.png";
import Bodymap from "./bodymap.js";
import Diagnosis from "./diagnosis.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <title>JointPal</title>
      </header>
      <div className="App-diagram">
        <Bodymap/>
        <Diagnosis />
      </div>
    </div>
  );
}

export default App;
