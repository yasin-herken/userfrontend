import React from "react";
import {Link, useLocation} from "react-router-dom";
import {calculatePrice, getTotal} from "../../Utility/Utility";
import {useDispatch, useSelector} from "react-redux";
import {removeItem, selectCart} from "../../Features/Cart/cartSlice";

const Header = () => {
  const location = useLocation();
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

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
                width={142}
                src="/assets/img/logo-dark.png"
                alt="Cartzilla"
              />
            </Link>
            <Link
              className="navbar-brand d-sm-none mr-2"
              to="/"
              style={{minWidth: "4.625rem"}}
            >
              <img
                width={74}
                src="/assets/img/logo-dark.png"
                alt="Cartzilla"
              />
            </Link>
            <div className="input-group-overlay d-none d-lg-flex mx-4">
              <input
                className="form-control appended-form-control"
                type="text"
                placeholder="Search for products"
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
              <a
                className="navbar-tool d-none d-lg-flex"
                href="account-wishlist.html"
              >
                <span className="navbar-tool-tooltip">Wishlist</span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon czi-heart"/>
                </div>
              </a>

              <div className="navbar-tool dropdown ml-3">
                <Link
                  className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                  to="/cart"
                >
                  <span className="navbar-tool-label">4</span>
                  <i className="navbar-tool-icon czi-cart"/>
                </Link>
                <Link className="navbar-tool-text" to="/cart">
                  <small>My Cart</small>${getTotal(cart)?.totalPrice}
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
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Shop User Account
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-orders.html"
                          >
                            Orders History
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-profile.html"
                          >
                            Profile Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-address.html"
                          >
                            Account Addresses
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-payment.html"
                          >
                            Payment Methods
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-wishlist.html"
                          >
                            Wishlist
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-tickets.html"
                          >
                            My Tickets
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="account-single-ticket.html"
                          >
                            Single Ticket
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Vendor Dashboard
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-settings.html"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-purchases.html"
                          >
                            Purchases
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-favorites.html"
                          >
                            Favorites
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-sales.html"
                          >
                            Sales
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-products.html"
                          >
                            Products
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-add-new-product.html"
                          >
                            Add New Product
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="dashboard-payouts.html"
                          >
                            Payouts
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="account-signin.html">
                        Sign In / Sign Up
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="account-password-recovery.html"
                      >
                        Password Recovery
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Navbar Variants
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="navbar-1-level-light.html"
                          >
                            1 Level Light
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="navbar-1-level-dark.html"
                          >
                            1 Level Dark
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="navbar-2-level-light.html"
                          >
                            2 Level Light
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="navbar-2-level-dark.html"
                          >
                            2 Level Dark
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="navbar-3-level-light.html"
                          >
                            3 Level Light
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="navbar-3-level-dark.html"
                          >
                            3 Level Dark
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="navbar-electro-store.html"
                          >
                            Electronics Store
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="navbar-marketplace.html"
                          >
                            Marketplace
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-divider"/>
                    <li>
                      <a className="dropdown-item" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="contacts.html">
                        Contacts
                      </a>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Help Center
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="help-topics.html"
                          >
                            Help Topics
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="help-single-topic.html"
                          >
                            Single Topic
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="help-submit-request.html"
                          >
                            Submit a Request
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        404 Not Found
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="404-simple.html">
                            404 - Simple Text
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="404-illustration.html"
                          >
                            404 - Illustration
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Blog List Layouts
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-list-sidebar.html"
                          >
                            List with Sidebar
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-list.html">
                            List no Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Blog Grid Layouts
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-grid-sidebar.html"
                          >
                            Grid with Sidebar
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-grid.html">
                            Grid no Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="blog-single.html">
                        Single Post
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Docs / Components
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="docs/dev-setup.html">
                        <div className="d-flex">
                          <div className="lead text-muted pt-1">
                            <i className="czi-book"/>
                          </div>
                          <div className="ml-2">
                              <span className="d-block text-heading">
                                Documentation
                              </span>
                            <small className="d-block text-muted">
                              Kick-start customization
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider"/>
                    <li>
                      <a
                        className="dropdown-item"
                        href="components/typography.html"
                      >
                        <div className="d-flex">
                          <div className="lead text-muted pt-1">
                            <i className="czi-server"/>
                          </div>
                          <div className="ml-2">
                              <span className="d-block text-heading">
                                Components
                                <span className="badge badge-info ml-2">
                                  40+
                                </span>
                              </span>
                            <small className="d-block text-muted">
                              Faster page building
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider"/>
                    <li>
                      <a className="dropdown-item" href="docs/changelog.html">
                        <div className="d-flex">
                          <div className="lead text-muted pt-1">
                            <i className="czi-edit"/>
                          </div>
                          <div className="ml-2">
                              <span className="d-block text-heading">
                                Changelog
                                <span className="badge badge-success ml-2">
                                  v1.2
                                </span>
                              </span>
                            <small className="d-block text-muted">
                              Regular updates
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider"/>
                    <li>
                      <a
                        className="dropdown-item"
                        href="mailto:contact@createx.studio"
                      >
                        <div className="d-flex">
                          <div className="lead text-muted pt-1">
                            <i className="czi-help"/>
                          </div>
                          <div className="ml-2">
                              <span className="d-block text-heading">
                                Support
                              </span>
                            <small className="d-block text-muted">
                              contact@createx.studio
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
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
