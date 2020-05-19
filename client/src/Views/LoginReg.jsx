import React, { useState } from "react";

import Login from '../components/Login';
import Register from '../components/Register';

function LoginReg() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Register/>
        <Login/>
      </div>
    );
  }
  
  export default LoginReg;