import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import BirdAPITest from './components/BirdAPITest';
import Nav from './components/Nav';
import PersonCardRefactor from './components/PersonCardRefactor';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="container justify-content-center">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="black"/>
      <PersonCardRefactor firstName="Jane" lastName="Doe" age={45} hairColor="black"/>
      
      <Nav/>
      <BirdAPITest/>
    </div>
  );
}

export default App;
