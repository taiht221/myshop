import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
CategoryName.propTypes = {
  data: PropTypes.array.isRequired,
};
export default function CategoryName({ data }) {
  return (
    <div className="categories">
      <h2 className="title">Danh mục sản phẩm </h2>
      <ul>
        {data &&
          data.map((e, i) => (
            <li key={i}>
              <Link to={`/the-loai/${e.slug}`} className="category-name">
                {e.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
