import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {Link, Redirect, Router} from "@reach/router";

import LoginReg from './Views/LoginReg';
import NewChecklist from './Views/NewChecklist';

function App() {
  return (
    <div className="container justify-content-center">

      <Router>
        <LoginReg path="/"/>
        <NewChecklist path="/encounters/new" />
      </Router>
    </div>
  );
}

export default App;
