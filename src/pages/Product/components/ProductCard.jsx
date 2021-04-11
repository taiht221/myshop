import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import useRenderStart from 'hooks/useRenderStart';
import { THUMBNAIL_PLACEHOLDER } from 'constants/index.js';
import './style.scss';
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
function ProductCard({ product = {} }) {
  const history = useHistory();
  const star = useRenderStart(product.rating_average);
  const percent = Math.round(100 - (parseInt(product.real_price) * 100) / parseInt(product.price));
  const thumbnail = product.images[0] ? product.images[0]?.base_url : THUMBNAIL_PLACEHOLDER;
  return (
    <div
      className="category-card"
      onClick={() => {
        history.push(`/${product.slug}`);
      }}
    >
      <span class="tooltiptext">{product.name}</span>
      <div className="card-img ">
        <Link to={`/${product.slug}`}>
          <img src={thumbnail} alt={product.name} />
        </Link>
        {percent > 0 ? <span className="percent">{percent > 0 ? `- ${percent} %` : ''}</span> : ''}
      </div>
      <div className="card-infor ">
        <div className="card-infor__left">
          <h2 className="title">{product.name}</h2>

          <span className="small-des">{product.short_description}</span>
          <div className="card-rating">{star}</div>
        </div>
        <div className="card-infor__right">
          <span className="price">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.real_price)}
          </span>
          {percent > 0 ? (
            <span className="sale-price">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
            </span>
          ) : (
            <span className="sale-price" style={{ visibility: 'hidden' }}>
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
