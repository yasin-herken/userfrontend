import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {calculatePrice, getTotal} from "../../Utility/Utility";
import {useDispatch, useSelector} from "react-redux";
import {removeItem, selectCart} from "../../Features/Cart/cartSlice";
import {selectWishlist} from "../../Features/Wishlist/wishlistReducer";
import qs from "query-string";

const Header = () => {
  const location = useLocation();
  const cart = useSelector(selectCart);
  const wishlist = useSelector(selectWishlist);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const queryParam = qs.parse(location.search);
  const navigate = useNavigate();
  return (<React.Fragment>
    {/* Navbar Electronics Store*/}
    <header className="box-shadow-sm">
      {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
      <div className="navbar-sticky bg-light">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link
              className="navbar-brand d-none d-sm-block mr-3 flex-shrink-0"
              to="/"
              style={{minWidth: "7rem"}}
            >
              <img
                width={120}
                src="/assets/img/shop1.png"
                alt="Easy-Shop"
              />
            </Link>
            <Link
              className="navbar-brand d-sm-none mr-2"
              to="/"
              style={{minWidth: "4.625rem"}}
            >
              <img
                width={74}
                src="/assets/img/shop1.png"
                alt="Easy-Shop"
              />
            </Link>
            <div className="input-group-overlay d-none d-lg-flex mx-4">
              <input
                className="form-control appended-form-control"
                type="text"
                placeholder="Search for products"
                onChange={(e)=> {
                  setText(e.target.value);
                }}
                onKeyUp={(e)=>{
                  if(e.key === "Enter") {
                  const search = qs.stringify({...queryParam, search: text})
                    navigate({
                      pathname: "/shop/query",
                      search
                    })
                  }
                }}
              />
              <div className="input-group-append-overlay">
                  <span className="input-group-text">
                    <i className="czi-search"/>
                  </span>
              </div>
            </div>
            <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"/>
              </button>
              <Link className="navbar-tool navbar-stuck-toggler" to="#">
                <span className="navbar-tool-tooltip">Expand menu</span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon czi-menu"/>
                </div>
              </Link>
              <Link
                className="navbar-tool d-none d-lg-flex"
                to="/wishlist"
              >
                <span className="navbar-tool-tooltip">Wishlist</span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon czi-heart"/>
                  <span className="navbar-tool-label">{wishlist.length}</span>
                </div>
              </Link>

              <div className="navbar-tool dropdown ml-3">
                <Link
                  className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                  to="/cart"
                >
                  <span className="navbar-tool-label">{cart.length}</span>
                  <i className="navbar-tool-icon czi-cart"/>
                </Link>
                <Link className="navbar-tool-text" to="/cart">
                  <small>My Cart</small>${getTotal(cart)?.totalPrice.toFixed(2)}
                </Link>
                {/* Cart dropdown*/}
                <div
                  className="dropdown-menu dropdown-menu-right"
                  style={{width: "20rem"}}
                >
                  <div className="widget widget-cart px-3 pt-2 pb-3">
                    <div
                      style={{height: "15rem"}}
                    >
                      {cart.map((item, index) => {
                        const calculatedPrice = calculatePrice(item.price);
                        return <div className="widget-cart-item pb-2 border-bottom" key={"widget" + index}>
                          <button
                            className="close text-danger"
                            type="button"
                            onClick={() => {
                              dispatch(removeItem(item.id))
                            }}
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="media align-items-center">
                            <Link
                              className="d-block mr-2"
                              to={`/shop/product/${item.id}`}
                            >
                              <img
                                width={64}
                                src={item.image}
                                alt="Product"
                              />
                            </Link>
                            <div className="media-body">
                              <h6 className="widget-product-title">
                                <Link to={"/shop/product" + item.id}>
                                  {item.title}
                                </Link>
                              </h6>
                              <div className="widget-product-meta">
                                <span className="text-accent mr-2">
                                  {`$${calculatedPrice.dollar}`}.<small>{`${calculatedPrice.cent}`}</small>
                                </span>
                                <span className="text-muted">x {item.quantity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      })}
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                      <div className="font-size-sm mr-2 py-2">
                        <span className="text-muted">Subtotal:</span>
                        <span className="text-accent font-size-base ml-1">
                            ${getTotal(cart)?.totalPrice}
                          </span>
                      </div>
                      <Link
                        className="btn btn-outline-secondary btn-sm"
                        to="/shop"
                      >
                        Expand cart
                        <i className="czi-arrow-right ml-1 mr-n1"/>
                      </Link>
                    </div>
                    <Link
                      className="btn btn-primary btn-sm btn-block"
                      to={"/checkout"}>
                      <i className="czi-card mr-2 font-size-base align-middle"/>
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarCollapse">
              {/* Search*/}
              <div className="input-group-overlay d-lg-none my-3">
                <div className="input-group-prepend-overlay">
                    <span className="input-group-text">
                      <i className="czi-search"/>
                    </span>
                </div>
                <input
                  className="form-control prepended-form-control"
                  type="text"
                  placeholder="Search for products"
                />
              </div>
              {/* Departments menu*/}
              <ul className="navbar-nav mega-nav pr-lg-2 mr-lg-2">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle pl-0"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="czi-view-grid mr-2"/>
                    Departments
                  </a>
                  <div className="dropdown-menu px-2 pl-0 pb-4">
                    <div className="d-flex flex-wrap flex-md-nowrap">
                      <div className="mega-dropdown-column pt-4 px-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-lg mb-3"
                            href="#"
                          >
                            <img
                              src="/assets/img/shop/departments/01.jpg"
                              alt="Shoes"
                            />
                          </a>
                          <h6 className="font-size-base mb-2">Clothing</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Women's clothing
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Men's clothing
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Kid's clothing
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-4 px-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-lg mb-3"
                            href="#"
                          >
                            <img
                              src="/assets/img/shop/departments/02.jpg"
                              alt="Shoes"
                            />
                          </a>
                          <h6 className="font-size-base mb-2">Shoes</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Women's shoes
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Men's shoes
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Kid's shoes
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-4 px-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-lg mb-3"
                            href="#"
                          >
                            <img
                              src="/assets/img/shop/departments/03.jpg"
                              alt="Shoes"
                            />
                          </a>
                          <h6 className="font-size-base mb-2">Gadgets</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Smartphones &amp; Tablets
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Wearable gadgets
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                E-book readers
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap flex-md-nowrap">
                      <div className="mega-dropdown-column pt-4 px-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-lg mb-3"
                            href="#"
                          >
                            <img
                              src="/assets/img/shop/departments/04.jpg"
                              alt="Shoes"
                            />
                          </a>
                          <h6 className="font-size-base mb-2">
                            Furniture &amp; Decor
                          </h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Home furniture
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Office furniture
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Lighting and decoration
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-4 px-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-lg mb-3"
                            href="#"
                          >
                            <img
                              src="/assets/img/shop/departments/05.jpg"
                              alt="Shoes"
                            />
                          </a>
                          <h6 className="font-size-base mb-2">Accessories</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Hats
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Sunglasses
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Bags
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-4 px-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-lg mb-3"
                            href="#"
                          >
                            <img
                              src="/assets/img/shop/departments/06.jpg"
                              alt="Shoes"
                            />
                          </a>
                          <h6 className="font-size-base mb-2">
                            Entertainment
                          </h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Kid's toys
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Video games
                              </a>
                            </li>
                            <li className="widget-list-item">
                              <a className="widget-list-link" href="#">
                                Outdoor / Camping
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* Primary menu*/}
              <ul className="navbar-nav">
                <li className={`nav-item dropdown ${location.pathname === "/" ? "active" : null}`}>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className={`nav-item dropdown ${location.pathname === "/shop" ? "active" : null}`}>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="shop"
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </React.Fragment>);
};

export default Header;
