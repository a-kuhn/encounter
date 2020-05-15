import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import BirdAPITest from './components/BirdAPITest';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="container justify-content-center">
      <SearchForm/>

      <Nav/>
      <BirdAPITest/>
    </div>
  );
}

export default App;
