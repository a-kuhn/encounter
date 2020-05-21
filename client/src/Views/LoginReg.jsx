import React, { useState } from "react";

import Login from "../components/Login";
import Register from "../components/Register";
import Nav from "../components/Nav";

export default () => {
  return (
    <>
      <div>
        {/* adding nav bar in for development purposes to easily test routing */}
        <Nav />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Register />
        <Login />
      </div>
    </>
  );
};
