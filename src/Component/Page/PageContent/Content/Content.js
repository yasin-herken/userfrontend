import React from "react";
import Products from "./Products/Products";

const Content = ({products}) => {
  const [initialProducts, setProducts] = React.useState(products);
  const [value, setValue] = React.useState("Popularity");
  return (
    <section className="col-lg-8" key={products.key}>
      {/* Toolbar*/}
      <div className="d-flex justify-content-center justify-content-sm-between align-items-center pt-2 pb-4 pb-sm-5">
        <div className="d-flex flex-wrap">
          <div className="form-inline flex-nowrap mr-3 mr-sm-4 pb-3">
            <label
              className="text-light opacity-75 text-nowrap mr-2 d-none d-sm-block"
              htmlFor="sorting"
            >
              Sort by:
            </label>
            <select className="form-control custom-select" id="sorting" value={value} onChange={(event) => {
              const {value} = event.target;
              setValue(value);
              if (value === "Popularity") {
                setProducts(initialProducts);
              } else if (value === "Low - Hight Price") {
                const _products = initialProducts.sort((a, b) => parseFloat(a.price.price) - parseFloat(b.price.price));
                setProducts(_products);
              } else if (value === "High - Low Price") {
                const _products = initialProducts.sort((a, b) => parseFloat(b.price.price) - parseFloat(a.price.price));
                setProducts(_products);
              } else if (value === "Average Rating") {
                setProducts(initialProducts.sort((a, b) => b.rating - a.rating));
              } else if (value === "A - Z Order") {
                setProducts(initialProducts.sort((a, b) => a.title.localeCompare(b.title)));
              } else if (value === "Z - A Order") {
                setProducts(initialProducts.sort((a, b) => b.title.localeCompare(a.title)));
              }
            }}>
              <option value={"Popularity"}>Popularity</option>
              <option value={"Low - Hight Price"}>Low - Hight Price</option>
              <option value={"High - Low Price"}>High - Low Price</option>
              <option value={"Average Rating"}>Average Rating</option>
              <option value={"A - Z Order"}>A - Z Order</option>
              <option value={"Z - A Order"}>Z - A Order</option>
            </select>
          </div>
        </div>
      </div>
      {/* Products grid*/}
      <Products key={initialProducts} products={initialProducts}/>
    </section>
  );
};

export default Content;
