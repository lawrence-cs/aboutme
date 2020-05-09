import React from 'react';
import './Custom.css';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navigation_Bar from "./components/navigation_bar.component";
import About_Me from "./components/about_me.component";
import Work_Experience from "./components/work_experience.component";
import Notable_Works from "./components/notable_works.component";
import Education from "./components/education.component";
import Skills from "./components/skills.component";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
