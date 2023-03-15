import React from "react";
import Brands from "../../Component/Brands/Brands";
import Categories from "../../Component/Category/Categories";
import HeroSlider from "../../Component/HeroSlider/HeroSlider";

const Dashboard = () => {
  return (
    <React.Fragment>
      <HeroSlider/>
      <Categories/>
      <Brands/>
    </React.Fragment>
  );
};

export default Dashboard;
