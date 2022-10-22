import React from "react";
import { Link } from "react-router-dom";

export default function Errorpage() {
  return (
    <div className="main-error">
      <h1>Page Not found </h1>
      <Link to="/">
        <button className="button-17">Home Page</button>
      </Link>
    </div>
  );
}
