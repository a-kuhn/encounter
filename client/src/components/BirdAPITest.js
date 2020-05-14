import React, {Component} from 'react';

class BirdAPITest extends Component {
    render(){
        return(
            <div>
                <p>table with response from API call should be formated like:</p>
                <table className="table">
                    <tr>
                        <th>add to checklist</th>
                        <th>species name</th>
                        <th>common name</th>
                        <th>how common</th>
                        <th>you have spotted this species</th>
                    </tr>
                    <tr>
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
};

export default BirdAPITest;