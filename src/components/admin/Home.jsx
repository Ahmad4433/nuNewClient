import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home_main">
      Wellcome To Admin Dashboard
      <div>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
};

export default Home;
