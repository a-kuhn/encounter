import React, { useState } from "react";

const Login = (props) => {
  //to keep track of what user is typing into search input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    const newSearch = {
      email,
      password,
    };
  };

  return (
    <div className="d-inline-flex m-5">
      <form onSubmit={loginUser} className="form">
            <fieldset className="border p-2 bg-light">
              <legend className="w-auto">login</legend>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                className="px-2 m-auto form-control"
                placeholder="email address"
              ></input>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="text"
                className="px-2 mt-2 mx-auto form-control"
                placeholder="password"
              ></input>
            </fieldset>
        <div className="justify-content-center row">
          <button className="btn btn-success font-weight-bold m-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
