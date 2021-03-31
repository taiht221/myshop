import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useRenderStart from 'hooks/useRenderStart';

RelatedProducts.propTypes = {
  data: PropTypes.object,
};
function RelatedProducts({ data = {} }) {
  const Star = useRenderStart(data.rating_average);
  const percent = Math.round(100 - (parseInt(data.real_price) * 100) / parseInt(data.price));
  return (
    <div className="row related-products">
      <div className="col-lg-12">
        <div className="text" style={{ margin: '16px' }}>
          <h3 style={{ fontSize: '24px' }}>Sản phẩm liên quan</h3>
        </div>
        <div className="related-products__wrap category__right">
          <div className="category-card ">
            <div className="card-img ">
              <Link to="/">
                <img src={data.thumbnail_url} alt="" />
              </Link>
              {percent > 0 ? <span className="percent">{percent > 0 ? `- ${percent} %` : ''}</span> : ''}
            </div>
            <div className="card-infor ">
              <div className="card-infor__left">
                <h2 className="title">{data.name}</h2>
              </div>
              <div className="card-infor__right">
                <span className="price">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.real_price)}
                </span>
                {percent > 0 ? (
                  <span className="sale-price">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                  </span>
                ) : (
                  <span className="sale-price" style={{ visibility: 'hidden' }}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="category-card ">
            <div className="card-img ">
              <Link to="/">
                <img src={data.thumbnail_url} alt="" />
              </Link>
              {percent > 0 ? <span className="percent">{percent > 0 ? `- ${percent} %` : ''}</span> : ''}
            </div>
            <div className="card-infor ">
              <div className="card-infor__left">
                <h2 className="title">{data.name}</h2>
              </div>
              <div className="card-infor__right">
                <span className="price">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.real_price)}
                </span>
                {percent > 0 ? (
                  <span className="sale-price">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                  </span>
                ) : (
                  <span className="sale-price" style={{ visibility: 'hidden' }}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="category-card ">
            <div className="card-img ">
              <Link to="/">
                <img src={data.thumbnail_url} alt="" />
              </Link>
              {percent > 0 ? <span className="percent">{percent > 0 ? `- ${percent} %` : ''}</span> : ''}
            </div>
            <div className="card-infor ">
              <div className="card-infor__left">
                <h2 className="title">{data.name}</h2>
              </div>
              <div className="card-infor__right">
                <span className="price">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.real_price)}
                </span>
                {percent > 0 ? (
                  <span className="sale-price">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                  </span>
                ) : (
                  <span className="sale-price" style={{ visibility: 'hidden' }}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="category-card ">
            <div className="card-img ">
              <Link to="/">
                <img src={data.thumbnail_url} alt="" />
              </Link>
              {percent > 0 ? <span className="percent">{percent > 0 ? `- ${percent} %` : ''}</span> : ''}
            </div>
            <div className="card-infor ">
              <div className="card-infor__left">
                <h2 className="title">{data.name}</h2>
              </div>
              <div className="card-infor__right">
                <span className="price">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.real_price)}
                </span>
                {percent > 0 ? (
                  <span className="sale-price">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                  </span>
                ) : (
                  <span className="sale-price" style={{ visibility: 'hidden' }}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
