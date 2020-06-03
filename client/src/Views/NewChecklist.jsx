import React, { useState } from "react";
import axios from 'axios';

import SearchResults from "../components/SearchResults";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";

export default () => {
  //state to hold search results from API call and send to SearchResults component
  const [newSearchResults, setNewSearchResults] = useState({});

  //API request using submitted form data from SearchForm
  const newSearch = (searchString) => {
    axios
      .get(searchString)
      .then((res)=> {
        setNewSearchResults(res.data);
        console.log(newSearchResults);
      })
      .catch((err)=>{
        // setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  }

  return (
    <div className="container justify-content-center">
      <Nav />
      <SearchForm onNewSearch={newSearch}/>
      <SearchResults searchResults={newSearchResults}/>
    </div>
  );
};
