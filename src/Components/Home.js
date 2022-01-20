import { Link } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";

function Home(props) {
  const { cart } = props;

  return (
    <div className="home">
      <NavBar cart={cart} checkout="true" />
      <div className="welcome">
        <h1>React Components Store</h1>
        <div className="welcome-description">
          Get the latest SSDs and Monitors parts here!
        </div>
        <span>
          <Link to="/browse">
            <button type="button" className="browse-button">
              Browse
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Home;
