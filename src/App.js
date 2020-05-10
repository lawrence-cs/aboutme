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
import Footer from "./components/footer.component";


function App() {
  return (
    <div>
        <Router className="col-12">
            <Navigation_Bar />
            <br/>
            <Route path="/about_me" exact component={About_Me} />
            <Route path="/work_experience" component={Work_Experience} />
            <Route path="/notable_works" component={Notable_Works} />
            <Route path="/education" component={Education} />
            <Route path="/skills" component={Skills} />
            <Footer className="col-12"/>
        </Router>
    </div>
  );
}

export default App;
