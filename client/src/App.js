import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {Link, Redirect, Router} from "@reach/router";

import NewChecklist from './Views/NewChecklist';

function App() {
  return (
    <div className="container justify-content-center">

      <Router>
        <NewChecklist path="/" />
      </Router>
    </div>
  );
}

export default App;
