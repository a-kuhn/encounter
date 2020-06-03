import React, {useState} from "react";

export default ({searchResults}) => {
  const [results, setResults] = useState([]);
  // searchResults ? setResults(searchResults) : setResults([]);
  
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
          {/* iterate through searchResults to build table */}
          {/* this will eventually become a form where each row represents a bird species to be included in a new checklist */}
          {
            // results.map(bird => {
            //   return(
            //     <tr className="text-center" key={bird._id}>
            //       <td>checkbox</td>
            //       <td className="font-italic">searchResults.latinName</td>
            //       <td>searchResults.commonName</td>
            //       <td>rare/migratory/common/etc OR IUCN listing</td>
            //       {/* y/n can't be developed until db set up & user data collected */}
            //       <td>y/n</td>
            //     </tr>
            //   );})
          }
        </table>
      </div>
    );
  };