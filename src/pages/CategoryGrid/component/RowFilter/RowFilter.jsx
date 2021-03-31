import { useHistory } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import './style.scss';

export default function RowFilter() {
  const parsed = queryString.parse(useLocation().search);
  const history = useHistory();
  const sort = parsed.sort || 'real_price.1';
  const match = useRouteMatch();
  const handleBigToLow = () => {
    const sortParams = { sort: 'real_price.-1' };
    history.push({
      pathname: match.url,
      search: queryString.stringify(sortParams),
    });
  };
  const handleLowToBig = () => {
    const sortParams = { sort: 'real_price.1' };
    history.push({
      pathname: match.url,
      search: queryString.stringify(sortParams),
    });
  };
  const handleDiscount = () => {
    const sortParams = { sort: 'discount_rate.-1' };
    history.push({
      pathname: match.url,
      search: queryString.stringify(sortParams),
    });
  };
  const handleHot = () => {
    const sortParams = { sort: 'sort_item.qty.-1' };
    history.push({
      pathname: match.url,
      search: queryString.stringify(sortParams),
    });
  };

  return (
    <div className="row filter-choose">
      <div className="check1">
        <div className="label" style={{ marginRight: 15 }}>
          Sắp xếp:
        </div>
        <label htmlFor="big" className="filter-cricle" onClick={handleBigToLow}>
          <span>Giá cao</span>
          <input type="radio" name="radio" id="big" defaultChecked={sort === 'real_price.1'} />
          <span className="checkmark" />
        </label>

        <label htmlFor="small" className="filter-cricle" onClick={handleLowToBig}>
          <span>Giá thấp</span>
          <input type="radio" name="radio" id="small" defaultChecked={sort === 'real_price.-1'} />
          <span className="checkmark" />
        </label>

        <label htmlFor="km" className="filter-cricle" onClick={handleDiscount}>
          <span>Khuyến mãi nhiều</span>
          <input type="radio" name="radio" id="km" defaultChecked={sort === 'discount_rate.-1'} />
          <span className="checkmark" />
        </label>

        <label htmlFor="hot" className="filter-cricle" onClick={handleHot}>
          <span>Được mua nhiều</span>
          <input type="radio" name="radio" id="hot" defaultChecked={sort === 'sort_item.qty.-1'} />
          <span className="checkmark" />
        </label>
      </div>
    </div>
  );
}
