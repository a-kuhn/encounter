import React, { useState } from "react";

import Nav from "../components/Nav";

function NewChecklist() {
  return (
    <div className="container justify-content-center">
      <Nav />
      <p>placeholder for user's saved checklists</p>
      <ul>
        <li>Name of checklist (link to "/encounter/:checklistId")</li>
        <li>location</li>
        <li>date created</li>
        <li>last updated</li>
        <li>% complete</li>
        <li>delete button</li>
      </ul>
    </div>
  );
}

export default NewChecklist;
