import { logDOM } from "@testing-library/react";
import "./App.css";
import logo from "./stretch-logo.png";
import Bodymap from "./bodymap.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <title>JointPal</title>
      </header>
      <img src={bodymap} className="App-bodymap" />
    </div>
  );
}

export default App;
