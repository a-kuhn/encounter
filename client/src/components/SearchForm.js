import React, { useState } from "react";

const SearchForm = (props) => {
  //to keep track of what user is typing into search input
  const [searchInputState, setSearchInputState] = useState("");

  return (
    <div className="container mt-5">
      <form className="form">
        <input
          onChange={(e) => setSearchInputState(e.target.value)}
          type="text"
          className="px-2 mx-2"
        ></input>
        <button className="btn btn-success font-weight-bold">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
