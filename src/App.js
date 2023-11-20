import { logDOM } from "@testing-library/react";
import "./App.css";
import logo from "./stretch-logo.png";
import Bodymap from "./bodymap.js";
import Diagnosis from "./diagnosis.js";
import stretchImage from "./newstretch.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <title>JointPal.ai</title>
      </header>
      <div className="inspo-header">
      <div className="inspo-text">
        <h2>personalized stretching guidance</h2>
        <h3>at your fingertips.</h3>
      </div>
      <div className="inspo-image">
        <img src={stretchImage} alt="Stretch-Image"></img>
      </div>
      </div>

      <div className="App-diagram">
        <Bodymap />
        <Diagnosis />
      </div>
    </div>
  );
}

export default App;
