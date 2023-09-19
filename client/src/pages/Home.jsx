import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Whyrony</h1>
      <button className="addHome">
        <Link to="/members" style={{ color: "inherit", textDecoration: "none" }}>
          View Members
        </Link>
      </button>
    </div>
  );
};

export default Home;
