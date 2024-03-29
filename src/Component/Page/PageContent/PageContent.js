import React from "react";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

const PageContent = ({products, categories}) => {
  return (
    <React.Fragment>
      {/* Page Content*/}
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          {/* Sidebar*/}
          <Sidebar key={categories} categories={categories}/>
          {/* Content  */}
          <Content products={products}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageContent;
