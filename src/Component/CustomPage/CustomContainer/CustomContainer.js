import React from "react";
import {calculatePrice} from "../../../Utility/Utility";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCartByQuantity} from "../../../Features/Cart/cartSlice";

const CustomContainer = ({product}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();
  let price = {
    dollar: 0, cent: 0
  };
  if (product?.price?.price) {
    const {dollar, cent} = calculatePrice(product.price.price);
    price.dollar = dollar;
    price.cent = cent;
  }
  return (<React.Fragment>
    <div className="container">
      <div className="bg-light box-shadow-lg rounded-lg">
        {/* Tabs*/}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link p-4 active"
              href="#general"
              data-toggle="tab"
              role="tab"
            >
              General Info
            </a>
          </li>
        </ul>
        <div className="px-4 pt-lg-3 pb-3 mb-5">
          <div className="tab-content px-lg-3">
            {/* General info tab*/}
            <div
              className="tab-pane fade show active"
              id="general"
              role="tabpanel"
            >
              <div className="row">
                {/* Product gallery*/}
                <div className="col-lg-7 pr-lg-0">
                  <div className="cz-product-gallery">
                    <div className="cz-preview order-sm-2">
                      {product?.images?.map((image, index) => {
                        return (<div
                          key={`image${index}`}
                          className={`cz-preview-item ${activeIndex === index ? "active" : null}`}
                          id={`image${index}`}>
                          <img
                            className="cz-image-zoom"
                            src={image?.url}
                            alt="Product"
                          />
                          <div className="cz-image-zoom-pane"/>
                        </div>)
                      })}
                    </div>
                    <div className="cz-thumblist order-sm-1">
                      {product?.images?.map((image, index) => {
                        return (<Link className={`cz-thumblist-item ${activeIndex === index ? "active" : null}`}
                                      key={`image${index}`}
                                      to={`#image${index}`}
                                      onClick={() => setActiveIndex(index)}
                        >
                          <img
                            src={image?.url}
                            alt="Product thumb"
                          />
                        </Link>)
                      })}
                    </div>
                  </div>
                </div>
                {/* Product details*/}
                <div className="col-lg-5 pt-4 pt-lg-0">
                  <div className="product-details ml-auto pb-3">
                    <div className="h3 font-weight-normal text-accent mb-3 mr-1">
                      {product?.price?.currency} {price.dollar}
                      .<small>{price.cent}</small>
                    </div>
                    <div className="font-size-sm mb-4">
                        <span className="text-heading font-weight-medium mr-1">
                          Color:
                        </span>
                      <span className="text-muted">{product?.color}</span>
                    </div>
                    <div className={"font-size-sm mb-4"}>
                      <span className="text-heading font-weight-medium mr-1">
                          Stock:
                      </span>
                      <span className="text-muted">{product?.stock}</span>
                    </div>
                    <div className="d-flex align-items-center pt-2 pb-4">
                      <select
                        className="custom-select mr-3"
                        style={{width: "5rem"}}
                        value={quantity}
                        onChange={(e) => {
                          if (e.target.value < 1) {
                            e.target.value = 1;
                          }
                          setQuantity(e.target.value);
                        }}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                      <button
                        className="btn btn-primary btn-shadow btn-block"
                        type="button"
                        onClick={() => {
                          dispatch(addToCartByQuantity({
                            id: product.id,
                            title: product.title,
                            size: product.size,
                            color: product.color,
                            image: product.images[0].url,
                            price: product.price.price,
                            currency: product.price.currency,
                            stock: product.stock,
                            quantity: +quantity
                          }));
                        }}
                      >
                        <i className="czi-cart font-size-lg mr-2"/>
                        Add to Cart
                      </button>
                    </div>
                    <div className="d-flex mb-4">
                      <div className="w-100 mr-3">
                        <button
                          className="btn btn-secondary btn-block"
                          type="button"
                        >
                          <i className="czi-heart font-size-lg mr-2"/>
                          <span className="d-none d-sm-inline">Add to </span>
                          Wishlist
                        </button>
                      </div>
                      <div className="w-100">
                        <button
                          className="btn btn-secondary btn-block"
                          type="button"
                        >
                          <i className="czi-compare font-size-lg mr-2"/>
                          Compare
                        </button>
                      </div>
                    </div>
                    {/* Product panels*/}
                    <div className="accordion mb-4" id="productPanels">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="accordion-heading">
                            <a
                              href="#shippingOptions"
                              role="button"
                              data-toggle="collapse"
                              aria-expanded="true"
                              aria-controls="shippingOptions"
                            >
                              <i className="czi-delivery text-muted lead align-middle mt-n1 mr-2"/>
                              Shipping options
                              <span className="accordion-indicator">
                                  <i data-feather="chevron-up"/>
                                </span>
                            </a>
                          </h3>
                        </div>
                        <div
                          className="collapse show"
                          id="shippingOptions"
                          data-parent="#productPanels"
                        >
                          <div className="card-body font-size-sm">
                            <div
                              className="d-flex justify-content-between border-bottom pb-2">
                              <div>
                                <div className="font-weight-semibold text-dark">
                                  Local courier shipping
                                </div>
                                <div className="font-size-sm text-muted">
                                  2 - 4 days
                                </div>
                              </div>
                              <div>$16.50</div>
                            </div>
                            <div
                              className="d-flex justify-content-between border-bottom py-2">
                              <div>
                                <div className="font-weight-semibold text-dark">
                                  UPS ground shipping
                                </div>
                                <div className="font-size-sm text-muted">
                                  4 - 6 days
                                </div>
                              </div>
                              <div>$19.00</div>
                            </div>
                            <div className="d-flex justify-content-between pt-2">
                              <div>
                                <div className="font-weight-semibold text-dark">
                                  Local pickup from store
                                </div>
                                <div className="font-size-sm text-muted">
                                  —
                                </div>
                              </div>
                              <div>$0.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <h3 className="accordion-heading">
                            <a
                              className="collapsed"
                              href="#localStore"
                              role="button"
                              data-toggle="collapse"
                              aria-expanded="true"
                              aria-controls="localStore"
                            >
                              <i className="czi-location text-muted font-size-lg align-middle mt-n1 mr-2"/>
                              Find in local store
                              <span className="accordion-indicator">
                                  <i data-feather="chevron-up"/>
                                </span>
                            </a>
                          </h3>
                        </div>
                        <div
                          className="collapse"
                          id="localStore"
                          data-parent="#productPanels"
                        >
                          <div className="card-body">
                            <select className="custom-select">
                              <option value>Select your country</option>
                              <option value="Argentina">Argentina</option>
                              <option value="Belgium">Belgium</option>
                              <option value="France">France</option>
                              <option value="Germany">Germany</option>
                              <option value="Spain">Spain</option>
                              <option value="UK">United Kingdom</option>
                              <option value="USA">USA</option>
                              <option value="Turkey">Turkey</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Sharing*/}
                    <h6 className="d-inline-block align-middle font-size-base my-2 mr-2">
                      Share:
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>);
};

export default CustomContainer;
