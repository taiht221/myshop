import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
import useRenderStart from 'hooks/useRenderStart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
CategoryList.propTypes = {
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

export default function CategoryList({
  images,
  discount_rate = ' - 36%',
  name = 'Product title',
  short_description = '121345',
  price,
  real_price,
  rating_average,
  inventory_status,
  review_count,
  specifications,
}) {
  const start = useRenderStart(rating_average);
  const percent = Math.round(100 - (parseInt(real_price) * 100) / parseInt(price));
  return (
    <div className="category-card ">
      <div className="card-img " style={{ position: 'relative' }}>
        <Link to="/thong-tin-san-pham">
          <img src={images[0].base_url} alt="" />
        </Link>
        {percent > 0 ? <span className="percent">{percent > 0 ? `- ${percent} %` : ''}</span> : ''}
      </div>
      <div className="card-infor ">
        <div className="card-infor__left">
          <h2 className="title">{name}</h2>
          <span className="small-des">{short_description}</span>
          <div className="card-rating">{start}</div>
          <ul className="detail">
            {specifications[0]?.attributes
              .map((e) => (
                <li>
                  <span>{e.name}</span>
                </li>
              ))
              .slice(0, 3)}
            <li>
              <span>Lượt đánh giá</span>
              <span>
                <strong>{review_count}</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="card-infor__right">
          <span className="price">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(real_price)}
          </span>
          <span className="sale-price">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
          </span>
          <span className="ship-price">
            <strong>Free Shipping</strong>
          </span>
          <span className="delivery">Delivery in 1 day</span>
          <div className="btn-filter">
            <div className="main-btn">
              <Link to="thanh-toan-san-pham">
                Chi tiết <ArrowDropDownIcon />
              </Link>
            </div>
            <div className="wish-btn">
              <Link to="thanh-toan-san-pham">
                Giỏ Hàng
                <FavoriteIcon color="secondary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
