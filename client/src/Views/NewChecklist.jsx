import React, { useState } from "react";

import BirdAPITest from '../components/BirdAPITest';
import Nav from '../components/Nav';
import SearchForm from '../components/SearchForm';

function NewChecklist() {
    return (
      <div className="container justify-content-center">
        <Nav/>
        <SearchForm/>
        <BirdAPITest/>
      </div>
    );
  }
  
  export default NewChecklist;