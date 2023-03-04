import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import qs from "query-string";
import {colorList, sizeList} from "../../../../Constants/Constants";

const Sidebar = ({categories}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [checkedState, setCheckedState] = useState(new Array(sizeList.length).fill(false));
  const navigate = useNavigate();
  const location = useLocation();
  const queryParam = qs.parse(location.search);
  const categoryArray = categories?.filter((category) => {
    if (category.parentid === null) {
      return category;
    }
  }).map((item) => {
    return {
      id: item.id, name: item.name, recursiveChildren: [],
    }
  });

  categoryArray?.forEach((item) => {
    categories?.forEach((category) => {
      if (category.parentid === item.id) {
        item.recursiveChildren.push({
          id: category.id, name: category.name, recursiveChildren: [],
        });
      }
    });
  });

  return (<React.Fragment>
    <aside className="col-lg-4">
      {/* Sidebar*/}
      <div className="cz-sidebar rounded-lg box-shadow-lg" id="shop-sidebar">
        <div className="cz-sidebar-header box-shadow-sm">
          <button
            className="close ml-auto"
            type="button"
            data-dismiss="sidebar"
            aria-label="Close"
          >
              <span className="d-inline-block font-size-xs font-weight-normal align-middle">
                Close sidebar
              </span>
            <span
              className="d-inline-block align-middle ml-2"
              aria-hidden="true"
            >
                ×
              </span>
          </button>
        </div>
        <div
          className="cz-sidebar-body"
          data-simplebar
          data-simplebar-auto-hide="true"
        >
          {/* Categories*/}
          <div className="widget widget-categories mb-4 pb-4 border-bottom">
            <h3 className="widget-title">Categories</h3>
            <div className="accordion mt-n1" id="shop-categories">
              {/* Shoes*/}
              {categoryArray?.map((category, index) => {
                return <div className="card" key={`category${index}`}>
                  <div className="card-header">
                    <h3 className="accordion-heading">
                      <a
                        className="collapsed"
                        href={`#${category.name}`}
                        role="button"
                        data-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="shoes"
                      >
                        {category.name}
                        <span className="accordion-indicator"/>
                      </a>
                    </h3>
                  </div>
                  <div
                    className="collapse"
                    id={category.name}
                    data-parent="#shop-categories"
                  >
                    <div className="card-body">
                      <div className="widget widget-links cz-filter">
                        <div className="input-group-overlay input-group-sm mb-2">
                          <input
                            className="cz-filter-search form-control form-control-sm appended-form-control"
                            type="text"
                            placeholder="Search"
                          />
                          <div className="input-group-append-overlay">
                            <span className="input-group-text">
                              <i className="czi-search"/>
                            </span>
                          </div>
                        </div>
                        <ul
                          className="widget-list cz-filter-list pt-1"
                          data-simplebar
                          data-simplebar-auto-hide="false"
                        >
                          <li className="widget-list-item cz-filter-item">
                            <Link
                              className="widget-list-link d-flex justify-content-between align-items-center"
                              to={{
                                pathname: "/shopGridLeft/query", search: qs.stringify({
                                  ...queryParam, category: category.name,
                                }),
                              }}
                            >
                              <span className="cz-filter-item-text">
                                View all
                              </span>
                            </Link>
                          </li>
                          {category.recursiveChildren.map((child,idx) => {
                            return <li className="widget-list-item cz-filter-item" key={`recursiveChildren${idx}`}>
                              <Link
                                className="widget-list-link d-flex justify-content-between align-items-center"
                                to={{
                                  pathname: "/shopGridLeft/query", search: qs.stringify({
                                    ...queryParam, category: child.name,
                                  }),
                                }}
                              >
                              <span className="cz-filter-item-text">
                                {child.name}
                              </span>
                              </Link>
                            </li>
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
          {/* Price range*/}
          <div className="widget mb-4 pb-4 border-bottom">
            <h3 className="widget-title">Price</h3>
            <div className="d-flex pb-1">
              <div className="w-50 pr-2 mr-2">
                <div className="input-group input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    className="form-control cz-range-slider-value-min"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    type="text"
                  />
                </div>
              </div>
              <div className="w-50 pl-2">
                <div className="input-group input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    className="form-control cz-range-slider-value-max"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Filter by Size*/}
          <div className="widget cz-filter mb-4 pb-4 border-bottom">
            <h3 className="widget-title">Size</h3>
            <ul
              className="widget-list cz-filter-list list-unstyled pt-1"
              style={{maxHeight: "12rem"}}
              data-simplebar
              data-simplebar-auto-hide="false"
            >
              {sizeList?.map((size, index) => {
                return <li className="cz-filter-item d-flex justify-content-between align-items-center mb-1"
                           key={size.value}>
                  <div
                    className="custom-control custom-checkbox"
                  >
                    <input
                      className="custom-control-input"
                      style={{cursor: "pointer", zIndex: 1}}
                      type="checkbox"
                      value={checkedState[index]}
                      onChange={() => {
                        setCheckedState(checkedState.map((item, indexChecked) => indexChecked === index ? !item : item));
                        const newQueryParam = {...queryParam}
                        if (checkedState[index]) {
                          if (typeof queryParam.size === "string") {
                            newQueryParam.size = []
                          } else if (Array.isArray(queryParam.size)) {
                            newQueryParam.size = queryParam.size.filter(item => item !== size.name)
                          }
                          console.log(newQueryParam)
                          navigate({
                            pathname: "/shopGridLeft/query", search: qs.stringify(newQueryParam)
                          })
                        } else {
                          newQueryParam.size = queryParam["size"] ? [queryParam["size"], size.name] : [size.name]
                          console.log(newQueryParam)
                          navigate({
                            pathname: "/shopGridLeft/query", search: qs.stringify(newQueryParam)
                          })
                        }

                      }}
                    />
                    <label
                      className="custom-control-label cz-filter-item-text"
                      htmlFor={size.name}
                    >
                      {size.value.toUpperCase()}
                    </label>
                  </div>
                </li>
              })}
            </ul>
          </div>
          {/* Filter by Color*/}
          <div className="widget">
            <h3 className="widget-title">Color</h3>
            <div className="d-flex flex-wrap">
              {colorList.map((color) => {
                return <div
                  key={color.value}
                  className="custom-control custom-option text-center mb-2 mx-1"
                  style={{width: "4rem"}}
                  onClick={() => {
                    navigate({
                      pathname: "/shopGridLeft/query", search: `?color=${color.value.toUpperCase()}`,
                    })
                  }}
                >
                  <input
                    className="custom-control-input"
                    type="checkbox"
                  />

                  <label
                    className="custom-option-label rounded-circle"
                    htmlFor="color-blue-gray"
                  >
                    <span
                      className="custom-option-color rounded-circle"
                      style={{backgroundColor: color.value}}
                    />
                  </label>
                  <label
                    className="d-block font-size-xs text-muted mt-n1"
                    htmlFor="color-blue-gray"
                  >
                    {color.name}
                  </label>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </aside>
  </React.Fragment>);
};

export default Sidebar;
