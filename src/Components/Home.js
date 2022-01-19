import { Link } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";

function Home() {
  return (
    <div>
      <h1>React Components Store</h1>
      <div className="welcome-description">
        Get the latest SSDs and Monitors parts here!
      </div>
      <Link to="/browse">
        <button type="button">Browse</button>
      </Link>
    </div>
  );
}

export default Home;
