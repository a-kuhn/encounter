import React, { useState } from "react";

import SearchResults from '../components/SearchResults';
import Nav from '../components/Nav';
import SearchForm from '../components/SearchForm';

function NewChecklist() {
    return (
      <div className="container justify-content-center">
        <Nav/>
        <SearchForm/>
        <SearchResults/>
      </div>
    );
  }
  
  export default NewChecklist;