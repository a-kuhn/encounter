import React, {Component} from "react";

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            ageState: this.props.age
        };
    }

    render(){
    const {firstName, lastName, hairColor} = this.props;
    return (
      <div className="container">
        <h2>
          {lastName}, {firstName}
        </h2>
        <p>Age: {this.state.ageState}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={()=>{this.setState({ageState: this.state.ageState+1})}}>
          {firstName}'s Birthday Button
        </button>
      </div>
    );
}}

export default PersonCard;
