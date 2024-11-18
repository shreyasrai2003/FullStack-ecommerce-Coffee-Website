import React from "react";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Banner from "../components/Banner/Banner";
import './CSS/Home.css'

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <NewsLetter />
    </div>
  );
};

export default Home;
