import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 style={{ fontStyle: "italic", fontSize:"100px" }}>This is "Whyrony".</h1>
      <h2>2023 System Architecture Class</h2>
      <h3>Prof. Artchoi</h3>
      <br></br>
      <p>2023-2, learn the fundamentals of system architecture class systems.</p>
      <button className="addHome">
        <Link to="/members" style={{ color: "inherit", textDecoration: "none" }}>
          View Members
        </Link>
      </button>
    </div>
  );
};

export default Home;
