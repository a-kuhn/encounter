import React, { Component } from "react";

class BirdAPITest extends Component {
  render() {
    return (
      <div className="container outline">
        <p className="">table with response from API call should be formated like:
            <span className="text-primary btn-outline-primary btn ml-5">button to create checklist for user</span>
        </p>
        <table className="table">
        <tr className="text-center">
            <th>include in checklist?</th>
            <th>species name</th>
            <th>common name</th>
            <th>how common</th>
            <th>have already seen?</th>
          </tr>
          <tr className="text-center">
            <td>checkbox</td>
            <td className="font-italic">Genus species</td>
            <td>bird name</td>
            <td>rare/migratory/common/etc OR IUCN listing</td>
            <td>y/n</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default BirdAPITest;
