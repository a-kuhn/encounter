import React, { useState } from "react";

// sample api request to iNaturalist
// http://api.inaturalist.org/v1/observations?taxon_name=cardinal&d1=1970&d2=now&iconic_taxa=Aves&order=desc&order_by=observed_on
/*
taxon_name=searchTaxon
d1=
d2=
iconic_taxa=
per_page=
order_by=
*/

const SearchForm = (props) => {
  //to keep track of what user is typing into search input
  const [searchLocation, setSearchLocation] = useState("");
  const [searchState, setSearchState] = useState("");
  const [searchCounty, setSearchCounty] = useState("");
  const [searchMunicipality, setSearchMunicipality] = useState("");
  const [searchTaxon, setSearchTaxon] = useState("");
  const [searchSeason, setSearchSeason] = useState("");

  const createSearch = (e) => {
    e.preventDefault();
    const newSearch = {
      searchLocation,
      searchState,
      searchCounty,
      searchMunicipality,
      searchTaxon,
      searchSeason,
    };
    console.log(newSearch);
    
  };

  return (
    <div className="container mt-5 ">
      <form onSubmit={createSearch} className="form">
        <div className="row">
          <div className="col-6 d-flex align-items-stretch ">
            <fieldset className="border p-2 ">
              <legend className="w-auto">location</legend>
              <input
                onChange={(e) => setSearchLocation(e.target.value)}
                value={searchLocation}
                type="text"
                className="px-2 mt-2 mx-auto form-control"
                placeholder="birding location (park, campus, riverside, etc.)"
              ></input>
              <input
                onChange={(e) => setSearchMunicipality(e.target.value)}
                value={searchMunicipality}
                type="text"
                className="px-2 mt-2 mx-auto form-control"
                placeholder="municipality"
              ></input>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    onChange={(e) => setSearchCounty(e.target.value)}
                    value={searchCounty}
                    type="text"
                    className="px-2 mt-2 mx-auto form-control"
                    placeholder="county"
                  ></input>
                </div>
                <div className="form-group col-md-6">
                  <input
                    onChange={(e) => setSearchState(e.target.value)}
                    value={searchState}
                    type="text"
                    className="px-2 mt-2 mx-auto form-control"
                    placeholder="state"
                  ></input>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="col-6">
            <fieldset className="border p-2">
              <legend className="w-auto">season</legend>
              <div class="form-check text-center">
                <input
                  onChange={(e) => setSearchSeason(e.target.value)}
                  class="form-check-input"
                  type="radio"
                  name="searchSeason"
                  id="thisSeason"
                  value="thisSeason"
                ></input>
                <label class="form-check-label" for="thisSeason">
                  this season (&#177; 2 months from today)
                </label>
              </div>
              <div className="form-row px-4">
                <div className="form-group col-md-6">
                  <div class="form-check">
                    <input
                      onChange={(e) => setSearchSeason(e.target.value)}
                      class="form-check-input"
                      type="radio"
                      name="searchSeason"
                      id="springSeason"
                      value="springSeason"
                    ></input>
                    <label class="form-check-label" for="springSeason">
                      spring
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      onChange={(e) => setSearchSeason(e.target.value)}
                      class="form-check-input"
                      type="radio"
                      name="searchSeason"
                      id="summerSeason"
                      value="summerSeason"
                    ></input>
                    <label class="form-check-label" for="summerSeason">
                      summer
                    </label>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div class="form-check">
                    <input
                      onChange={(e) => setSearchSeason(e.target.value)}
                      class="form-check-input"
                      type="radio"
                      name="searchSeason"
                      id="winterSeason"
                      value="winterSeason"
                    ></input>
                    <label class="form-check-label" for="winterSeason">
                      winter
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      onChange={(e) => setSearchSeason(e.target.value)}
                      class="form-check-input"
                      type="radio"
                      name="searchSeason"
                      id="fallSeason"
                      value="fallSeason"
                    ></input>
                    <label class="form-check-label" for="fallSeason">
                      fall
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="border p-2">
              <legend className="w-auto">species</legend>
              <label className="px-2 mx-2">Enter a name:</label>
              <input
                onChange={(e) => setSearchTaxon(e.target.value)}
                value={searchTaxon}
                type="text"
                className="px-2 mt-2 mx-auto form-control"
                placeholder="common or latin name will do!"
              ></input>
            </fieldset>
          </div>
        </div>
        <div className="justify-content-center row">
          <button className="btn btn-success font-weight-bold m-2">
            Build a Checklist
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
