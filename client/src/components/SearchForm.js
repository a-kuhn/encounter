import React, { useState } from "react";

const SearchForm = (props) => {
  //to keep track of what user is typing into search input
  const [searchInputState, setSearchInputState] = useState("");

  return (
    <div className="container">
      <form onSubmit={}>
        <input
          onChange={(e) => setSearchInputState(e.target.value)}
          type="text"
          className=""
        ></input>
        <button className="">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
