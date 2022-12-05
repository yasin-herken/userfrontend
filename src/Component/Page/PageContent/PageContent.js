import React from "react";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";
const PageContent = () => {
  return (
    <React.Fragment>
      {/* Page Content*/}
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          {/* Sidebar*/}
          <Sidebar />
          {/* Content  */}
          <Content />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageContent;
