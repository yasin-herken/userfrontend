import React from "react";
import Product from "./Product/Product";
import Pagination from "../Pagination/Pagination";
import {pageSize} from "../../../../../Constants/Constants";
import {ToastContainer} from "react-toastify";

const currentTable = (currentPage, pageSize, products) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return products.slice(startIndex, endIndex);
}
const Products = ({products}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const currentTableData = currentTable(currentPage, pageSize, products);
  return (
    <React.Fragment>
      <div className="row mx-n2">
        {currentTableData?.map((product, index) => {
          return <Product key={`current${index}`} product={product}/>
        })}
        <hr className="my-3"/>
      </div>
      {/* Pagination*/}
      <Pagination
        currentPage={currentPage}
        totalCount={products.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}/>
    </React.Fragment>
  );
};

export default Products;
