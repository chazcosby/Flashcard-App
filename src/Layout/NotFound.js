import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <React.Fragment>
      <h2>Not Found</h2>
     
      <Link to={"/"} className="btn btn-warning">
        Return Home
      </Link>
    </React.Fragment>
  );
}

export default NotFound;
