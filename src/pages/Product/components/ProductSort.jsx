import { useHistory } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import './style.scss';
import { Tab, Tabs } from '@material-ui/core';
ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <div className="row filter-choose" style={{ color: 'green' }}>
      <div className="col-lg-3 col-sx-12"></div>
      <div className="check1 col-lg-9 col-sx-12">
        <div className="lable">Sắp xếp:</div>
        <Tabs
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="disabled tabs example"
          value={currentSort}
          onChange={handleSortChange}
        >
          <Tab label="Giá cao" value="real_price.-1"></Tab>
          <Tab label="Giá thấp" value="real_price.1"></Tab>
          <Tab label="Khuyến mãi nhiều" value="discount_rate.-1"></Tab>
          <Tab label="Được mua nhiều" value="sort_item.qty.-1"></Tab>
        </Tabs>
      </div>
    </div>
  );
}
