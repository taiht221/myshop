import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

ProductSkeletonList.propTypes = {
  lenght: PropTypes.number,
};

function ProductSkeletonList({ length = 15 }) {
  return (
    <div className="loading-state">
      <div className="col-lg-9 category__right">
        {Array.from(new Array(length)).map((e, i) => (
          <div className="category-card --loading" key={i}>
            <div className="card-img ">
              <div>Loading</div>
            </div>
            <div className="card-infor ">
              <div className="card-infor__left">
                <h2 className="title">Loading</h2>
                <span className="small-des">Loading</span>
                <div className="card-rating">Loading</div>
              </div>
              <div className="card-infor__right">
                <span className="price">Loading</span>
                <span className="sale-price">Loading</span>
                <div className="btn-filter">
                  <Link to="/" href="#" className="main-btn">
                    <span>Loading</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSkeletonList;
