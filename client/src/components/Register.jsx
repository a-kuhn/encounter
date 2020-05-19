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
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    };
  };

  return (
    <div className="d-inline-flex m-5">
      <form onSubmit={createUser} className="form">
        <fieldset className="border p-2 bg-light">
          <legend className="w-auto">register</legend>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            className="px-2 mx-auto form-control"
            placeholder="first name"
          ></input>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            className="px-2 mt-2 mx-auto form-control"
            placeholder="last name"
          ></input>
          <div className="form-group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="px-2 mt-2 mx-auto form-control"
              placeholder="email"
            ></input>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="text"
                className="px-2 mt-2 mx-auto form-control"
                placeholder="password"
              ></input>
            </div>
            <div className="form-group col-md-6">
              <input
                onChange={(e) => setPasswordConfirm(e.target.value)}
                value={passwordConfirm}
                type="text"
                className="px-2 mt-2 mx-auto form-control"
                placeholder="password confirm"
              ></input>
            </div>
          </div>
        </fieldset>
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
