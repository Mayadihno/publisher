import React from "react";
import Banner from "../../components/banner/Banner";
import Discovery from "../../components/discovery/Discovery";
import Genre from "../../components/genre/Genre";
import Story from "../../components/Story/Story";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Discovery />
      <Genre />
      <Story />
    </React.Fragment>
  );
};

export default Home;
