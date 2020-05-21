import React, { useState } from "react";

import Nav from "../components/Nav";
import Checklist from "../components/Checklist";

export default () => {
  return (
    <>
      <div className="">
          <Nav/>
      </div>
      <div className="justify-content-center align-items-center">
        <Checklist />
      </div>
    </>
  );
};