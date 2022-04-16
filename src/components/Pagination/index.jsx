import React from 'react';
import './Pagination.scss';

const Pagination = () => {
  return (
    <div id="pagination">
      <div
        class="pagination-container wow zoomIn mar-b-1x"
        data-wow-duration="0.5s"
      >
        <ul class="pagination">
          <li class="pagination-item--wide first">
            <a class="pagination-link--wide first" href="#">
              Previous
            </a>
          </li>
          <li class="pagination-item first-number">
            <a class="pagination-link" href="#">
              1
            </a>
          </li>
          <li class="pagination-item">
            <a class="pagination-link" href="#">
              2
            </a>
          </li>
          <li class="pagination-item is-active">
            <a class="pagination-link" href="#">
              3
            </a>
          </li>
          <li class="pagination-item">
            <a class="pagination-link" href="#">
              4
            </a>
          </li>
          <li class="pagination-item">
            <a class="pagination-link" href="#">
              5
            </a>
          </li>
          <li class="pagination-item--wide last">
            <a class="pagination-link--wide last" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
