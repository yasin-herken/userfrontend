import React from "react";

const Pagination = () => {
  return (
    <React.Fragment>
      <nav
        className="d-flex justify-content-between pt-2"
        aria-label="Page navigation"
      >
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="czi-arrow-left mr-2" />
              Prev
            </a>
          </li>
        </ul>
        <ul className="pagination">
          <li className="page-item d-sm-none">
            <span className="page-link page-link-static">1 / 5</span>
          </li>
          <li
            className="page-item active d-none d-sm-block"
            aria-current="page"
          >
            <span className="page-link">
              1<span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="page-item d-none d-sm-block">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item d-none d-sm-block">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item d-none d-sm-block">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item d-none d-sm-block">
            <a className="page-link" href="#">
              5
            </a>
          </li>
        </ul>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              Next
              <i className="czi-arrow-right ml-2" />
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
