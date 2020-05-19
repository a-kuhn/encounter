import React from "react";

function Checklist() {
  return (
    <div className="container outline">
      <p className="h1">location</p>
      <span>This checklist is __% complete</span>
      <span className="mx-5 btn btn-sm btn-primary">button to save edits</span>
      <p>location notes --> textfield input</p>
      <table className="table">
        <tr className="text-center">
          <th>spotted?</th>
          <th>date seen</th>
          <th>species name</th>
          <th>common name</th>
          <th>notes</th>
          <th>delete</th>
        </tr>
        <tr className="text-center">
          <td>Y | N --> N=empty checkbox, Y=solid green checkmark</td>
          <td>MM/DD/YYYY -->input box</td>
          <td className="font-italic">Genus species</td>
          <td>bird name</td>
          <td>input text area</td>
          <td>notes about bird spotting</td>
          <td>little red trash can --> link to delete row from checklist</td>
        </tr>
      </table>
    </div>
  );
}

export default Checklist;
