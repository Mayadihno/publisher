import React from "react";
import Banner from "../../components/banner/Banner";
import Discovery from "../../components/discovery/Discovery";
import Genre from "../../components/genre/Genre";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Discovery />
      <Genre />
    </React.Fragment>
  );
};

export default Home;
