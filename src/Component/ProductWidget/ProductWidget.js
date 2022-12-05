import React from "react";

const ProductWidget = () => {
  return (
    <React.Fragment>
      {/* Product widgets*/}
      <section className="container pt-md-3 pb-4 pb-md-5 mb-lg-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-2 py-3">
            <div className="widget">
              <h3 className="widget-title">Bestsellers</h3>
              <div className="media align-items-center pb-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v1.html">
                  <img
                    width={64}
                    src="assets/img/shop/cart/widget/01.jpg"
                    alt="Product"
                  />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v1.html">Women Colorblock Sneakers</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent mr-2">
                      $150.<small>00</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v1.html">
                  <img
                    width={64}
                    src="assets/img/shop/cart/widget/02.jpg"
                    alt="Product"
                  />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v1.html">TH Jeans City Backpack</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent mr-2">
                      $79.<small>50</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v1.html">
                  <img
                    width={64}
                    src="assets/img/shop/cart/widget/03.jpg"
                    alt="Product"
                  />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v1.html">3-Color Sun Stash Hat</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent mr-2">
                      $22.<small>50</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2">
                <a className="d-block mr-2" href="shop-single-v1.html">
                  <img
                    width={64}
                    src="assets/img/shop/cart/widget/04.jpg"
                    alt="Product"
                  />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v1.html">Cotton Polo Regular Fit</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent mr-2">
                      $9.<small>00</small>
                    </span>
                  </div>
                </div>
              </div>
              <p className="mb-0">...</p>
              <a className="font-size-sm" href="shop-grid-ls.html">
                View more
                <i className="czi-arrow-right font-size-xs ml-1" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-2 py-3">
            <div className="widget">
              <h3 className="widget-title">New arrivals</h3>
              <div className="media align-items-center pb-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v1.html">
                  <img width={64} src="assets/img/shop/widget/02.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v1.html">Cap with Appliqué</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent mr-2">
                      $15.<small>99</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v1.html">
                  <img width={64} src="assets/img/shop/widget/01.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v1.html">Girl's T-shirt with Motif</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent mr-2">
                      $14.<small>50</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2 border-bottom">
                <a className="d-block mr-2" href="shop-single-v1.html">
                  <img width={64} src="assets/img/shop/widget/03.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v1.html">Leather Platform Sandals</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent mr-2">
                      $78.<small>00</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media align-items-center py-2">
                <a className="d-block mr-2" href="shop-single-v1.html">
                  <img width={64} src="assets/img/shop/widget/04.jpg" alt="Product" />
                </a>
                <div className="media-body">
                  <h6 className="widget-product-title">
                    <a href="shop-single-v1.html">Regular Fit Cotton Shirt</a>
                  </h6>
                  <div className="widget-product-meta">
                    <span className="text-accent mr-2">
                      $17.<small>99</small>
                    </span>
                  </div>
                </div>
              </div>
              <p className="mb-0">...</p>
              <a className="font-size-sm" href="shop-grid-ls.html">
                View more
                <i className="czi-arrow-right font-size-xs ml-1" />
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 d-none d-lg-block">
            <a className="d-block" href="shop-grid-ls.html">
              <img
                className="d-block rounded-lg"
                src="assets/img/home/banners/v-banner.jpg"
                alt="Promo banner"
              />
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProductWidget;
