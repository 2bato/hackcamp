import { logDOM } from "@testing-library/react";
import "./App.css";
import bodymap from "./bodymap.jpg";
import logo from "./stretch-logo.png";

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
