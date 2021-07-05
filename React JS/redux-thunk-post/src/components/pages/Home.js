import React from "react";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <div className="container">
      <div className="py-4">
      <h1>POsts</h1>
        <Posts />
      </div>
    </div>
  );
};

export default Home;
