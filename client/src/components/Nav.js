import React, { Component } from "react";

class Nav extends Component {
    render() {
      return (
        <div className="navbar container justify-content-end m-2">
            <a href="" className="px-2">Home (link to user dashboard)</a>
            <a href="" className="px-2 text-danger">Logout (logout, redirect to login/reg)</a>
            <a href="" className="px-2 text-success">Build New Checklist (link to location search page)</a>
        </div>
      );
    }
  }
  
  export default Nav;