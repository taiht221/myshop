import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
import useRenderStart from 'hooks/useRenderStart';

CategoryGrid.propTypes = {
  images: PropTypes.array.isRequired,
  discount_rate: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  short_description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  real_price: PropTypes.number.isRequired,
  rating_average: PropTypes.number.isRequired,
  inventory_status: PropTypes.string.isRequired,
  review_count: PropTypes.number.isRequired,
  specifications: PropTypes.array.isRequired,
};
export default function CategoryGrid({ images, discount, name, short_description, price, real_price, rating_average }) {
  const start = useRenderStart(rating_average);
  const percent = Math.round(100 - (parseInt(real_price) * 100) / parseInt(price));

  return (
    <div className="category-card">
      <div className="card-img ">
        <Link to="/">
          <img src={images[0].base_url} alt="" />
        </Link>
        {percent > 0 ? <span className="percent">{percent > 0 ? `- ${percent} %` : ''}</span> : ''}
      </div>
      <div className="card-infor ">
        <div className="card-infor__left">
          <h2 className="title">{name}</h2>

          <span className="small-des">{short_description}</span>
          <div className="card-rating">{start}</div>
        </div>
        <div className="card-infor__right">
          <span className="price">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(real_price)}
          </span>
          <span className="sale-price">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
          </span>
          <div className="btn-filter">
            <Link to="/" className="main-btn">
              <span>Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
