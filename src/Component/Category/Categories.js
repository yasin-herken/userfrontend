import React from "react";
import { categories } from "../../Common/dashboardCategories";
import LeftCategory from "./LeftCategory/LeftCategory";
import RightCategory from "./RightCategory/RightCategory";

const Categories = () => {
  return (
    <React.Fragment>
      {categories.map((category, index) =>
        index % 2 === 0 ? <LeftCategory key={category?.categoryName} category={category}/> :
          <RightCategory key={index} category={category}/>
      )}
    </React.Fragment>
  );
};

export default Categories;
