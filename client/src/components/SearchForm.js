import React, { useState } from "react";

const SearchForm = (props) => {
  //to keep track of what user is typing into search input
  const [searchLocation, setSearchLocation] = useState("");
  const [searchState, setSearchState] = useState("");
  const [searchCounty, setSearchCounty] = useState("");
  const [searchMunicipality, setSearchMunicipality] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("");
  const [searchSeason, setSearchSeason] = useState("");

  return (
    <div className="container mt-5 outline">
      <form className="form">
        <div className="row">
          <div className="col-6 d-flex align-items-stretch outline">
            <fieldset className="border p-2 outline">
              <legend className="w-auto">location</legend>
              <input
                onChange={(e) => setSearchLocation(e.target.value)}
                type="text"
                className="px-2 m-2 form-control"
                placeholder="birding location (park, campus, riverside, etc.)"
              ></input>
              <input
                onChange={(e) => setSearchMunicipality(e.target.value)}
                type="text"
                className="px-2 m-2 form-control"
                placeholder="municipality"
              ></input>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    onChange={(e) => setSearchCounty(e.target.value)}
                    type="text"
                    className="px-2 m-2 form-control"
                    placeholder="county"
                  ></input>
                </div>
                <div className="form-group col-md-6">
                  <input
                    onChange={(e) => setSearchState(e.target.value)}
                    type="text"
                    className="px-2 m-2 form-control"
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
                  class="form-check-input"
                  type="radio"
                  name="thisSeason"
                  id="thisSeason"
                  value="thisSeason"
                  checked
                ></input>
                <label class="form-check-label" for="thisSeason">
                  this season (&#177; 2 months from today)
                </label>
              </div>
              <div className="form-row px-4">
                <div className="form-group col-md-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="springSeason"
                      id="springSeason"
                      value="springSeason"
                    ></input>
                    <label class="form-check-label" for="springSeason">
                      spring
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="summerSeason"
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
                      class="form-check-input"
                      type="radio"
                      name="winterSeason"
                      id="winterSeason"
                      value="winterSeason"
                    ></input>
                    <label class="form-check-label" for="winterSeason">
                      winter
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="fallSeason"
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
                onChange={(e) => setSearchSpecies(e.target.value)}
                type="text"
                className="px-2 m-2 form-control"
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
