import { Link } from 'react-router-dom';
import './style.scss';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  paginate: PropTypes.object,
  renderLink: PropTypes.func.isRequired,
};
Pagination.defaultProps = {
  paginate: {},
};

export default function Pagination({ paginate = {}, renderLink }) {
  function renderPagination() {
    let list = [];
    let { currentPage, totalPage } = paginate;
    let limitPrev = currentPage - 1 > 0 ? currentPage - 1 : 1;
    let limitNext = currentPage + 1 < totalPage ? currentPage + 1 : totalPage;
    if (currentPage !== 1) {
      let e = renderLink(currentPage - 1);

      list.push(
        <li key={Math.random()}>
          <Link aria-current="page" className="page-numbers" to={e}>
            prev
          </Link>
        </li>
      );
    }

    if (currentPage === 3) {
      list.push(
        <li key={Math.random()}>
          <Link aria-current="page" className="page-numbers " to={renderLink(1)}>
            1
          </Link>
        </li>
      );
    } else if (currentPage >= 4) {
      list.push(
        <li key={Math.random()}>
          <Link aria-current="page" className="page-numbers " to={renderLink(1)}>
            1
          </Link>
        </li>
      );
      list.push(
        <li key={Math.random()}>
          <span className="page-numbers dot">...</span>
        </li>
      );
    }

    for (let i = limitPrev; i <= limitNext; i++) {
      let e = renderLink(i);

      if (i === currentPage) {
        list.push(
          <li key={Math.random()}>
            <span aria-current="page" className="page-numbers active">
              {i}
            </span>
          </li>
        );
      } else {
        list.push(
          <li key={Math.random()}>
            <Link aria-current="page" className="page-numbers" to={e}>
              {i}
            </Link>
          </li>
        );
      }
    }

    if (currentPage === totalPage - 3) {
      list.push(
        <li key={Math.random()}>
          <span className="page-numbers dot">...</span>
        </li>
      );

      list.push(
        <li key={Math.random()}>
          <Link aria-current="page" className="page-numbers " to={renderLink(totalPage)}>
            {totalPage}
          </Link>
        </li>
      );
    } else if (currentPage === totalPage - 2) {
      list.push(
        <li key={Math.random()}>
          <Link aria-current="page" className="page-numbers " to={renderLink(totalPage)}>
            {totalPage}
          </Link>
        </li>
      );
    } else if (currentPage <= totalPage - 4) {
      list.push(
        <li key={Math.random()}>
          <span className="page-numbers dot">...</span>
        </li>
      );
      list.push(
        <li key={Math.random()}>
          <Link aria-current="page" className="page-numbers " to={renderLink(totalPage)}>
            {totalPage}
          </Link>
        </li>
      );
    }

    if (currentPage < totalPage) {
      let e = renderLink(currentPage + 1);

      list.push(
        <li key={Math.random()}>
          <Link aria-current="page" className="page-numbers" to={e}>
            next
          </Link>
        </li>
      );
    }
    return list;
  }
  return (
    <div className="pagi-wrap">
      <div className="pagination">
        <ul className="page-pagination">{renderPagination()}</ul>
        {/* <a href="#">«</a>
        <a href="#" className="active">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">»</a> */}
      </div>
    </div>
  );
}
