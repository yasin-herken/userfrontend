import React from "react";
import {usePagination} from "../../../../../Hooks/usePagination";
import {Link} from "react-router-dom";

const Pagination = (props) => {
  const {onPageChange, totalCount, siblingCount = 1, currentPage, pageSize} = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <React.Fragment>
      <nav
        className="d-flex justify-content-between pt-2"
        aria-label="Page navigation"
      >
        <ul className="pagination">
          <li className={`page-item`} onClick={onPrevious}>
            <Link className="page-link" to="">
              <i className="czi-arrow-left mr-2"/>
              Prev
            </Link>
          </li>
        </ul>
        <ul className="pagination">
          {
            paginationRange.map((pageNumber, index) => {
              if (pageNumber === '...') {
                return (
                  <li
                    className="page-item disabled"
                    key={index}
                  >
                    <span className="page-link">...</span>
                  </li>
                );
              }
              return (
                <li
                  className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
                  key={`page${index}`}
                  onClick={() => onPageChange(pageNumber)}
                >
                  <Link className="page-link" to="">
                    {pageNumber}
                  </Link>
                </li>
              );
            })
          }
        </ul>
        <ul className="pagination">
          <li className="page-item" onClick={onNext}>
            <Link className="page-link" to="#" aria-label="Next">
              Next
              <i className="czi-arrow-right ml-2"/>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
