import React, { useState } from "react";

import Nav from "../components/Nav";
import Checklist from "../components/Checklist";

function SingleChecklist() {
  return (
    <>
      <div>
          <Nav/>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Checklist />
      </div>
    </>
  );
}

export default SingleChecklist;
