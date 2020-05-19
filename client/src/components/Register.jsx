import React, { useState } from "react";

const Register = (props) => {
  //to keep track of what user is typing into search input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newSearch = {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    };
  };

  return (
    <div className="container mt-5 outline">
      <form onSubmit={createUser} className="form">
        <div className="row">
          <div className="col-6">
          <fieldset className="border p-2 outline">
              <legend className="w-auto">register</legend>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                className="px-2 m-2 form-control"
                placeholder="first name"
              ></input>
              <input
                onChange={(e) => setSearchMunicipality(e.target.value)}
                value={searchMunicipality}
                type="text"
                className="px-2 m-2 form-control"
                placeholder="municipality"
              ></input>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    onChange={(e) => setSearchCounty(e.target.value)}
                    value={searchCounty}
                    type="text"
                    className="px-2 m-2 form-control"
                    placeholder="county"
                  ></input>
                </div>
                <div className="form-group col-md-6">
                  <input
                    onChange={(e) => setSearchState(e.target.value)}
                    value={searchState}
                    type="text"
                    className="px-2 m-2 form-control"
                    placeholder="state"
                  ></input>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="justify-content-center row">
          <button className="btn btn-success font-weight-bold m-2">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
