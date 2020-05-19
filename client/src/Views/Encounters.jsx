import React, { useState } from "react";

import Nav from "../components/Nav";

function NewChecklist() {
  return (
    <div className="container justify-content-center">
      <Nav />
      <p>placeholder for user stats</p>
      <ul>
          <li>total # of species spotted</li>
          <li>total # of places visited</li>
      </ul>
      <p>placeholder for user's saved checklists</p>
      <ul>
        <li>Name of checklist (link to "/encounter/:checklistId")</li>
        <li>location (link to live chat for location?? --> maybe this is a more of a bubble/chat window that pops up)</li>
        <li>date created</li>
        <li>last updated</li>
        <li>% complete</li>
        <li>delete button</li>
      </ul>
    </div>
  );
}

export default NewChecklist;
