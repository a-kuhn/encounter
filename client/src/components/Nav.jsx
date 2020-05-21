import React, { Component } from "react";

export default () => {
  return (
    <div className="navbar container justify-content-end my-2 outline">
      <a href="/encounters" className="px-2">
        Home
      </a>
      <a href="/" className="px-2 text-danger">
        Logout
      </a>
      <a href="/encounters/new" className="px-2 text-success">
        New Checklist
      </a>
    </div>
  );
};
