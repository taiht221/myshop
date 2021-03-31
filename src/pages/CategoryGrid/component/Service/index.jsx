import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';

Service.propTypes = {};

function Service(props) {
  const parsed = queryString.parse(useLocation().search);

  const history = useHistory();
  const match = useRouteMatch();
  // const sort = { free_ship_badge: true, is_best_price_guaranteed: 1, support_p2h_delivery: 1 };
  const [values, setValues] = useState({
    free_ship_badge: false,
    is_best_price_guaranteed: false,
    support_p2h_delivery: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(e.target.check);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };
  const newQuery = (e) => {
    let query = {};
    if (e) {
      for (let i in e) {
        if (e[i]) {
          query[i] = e[i];
        }
      }
    } else {
      query = null;
    }
    return query;
  };
  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newQuery(values)),
    });
    // console.log(1, parsed);
    // console.log(parsed === newQuery(values));
  }, [history, values]);

  // console.log(2, newQuery(values));
  // console.log(3, typeof parsed);
  // checkEqual(newQuery(values), parsed);
  // console.log(checkEqual(newQuery(values), parsed));
  // console.log(parsed == newQuery(values));
  // const parsed = queryString.parse(useLocation().search);

  // const sort = { free_ship_badge: true, is_best_price_guaranteed: 1, support_p2h_delivery: 1 };
  // const [sort, setsort] = useState({ free_ship_badge: true, is_best_price_guaranteed: 1, support_p2h_delivery: 1 });
  // const sort = parsed.sort || 'real_price.1';

  return (
    <div className="brands">
      <div className="check2">
        <h2 className="title">Dịch vụ</h2>
        {[
          { value: 'free_ship_badge', lable: 'Miễn Phí Giao Hàng', check: parsed.free_ship_badge },
          { value: 'is_best_price_guaranteed', lable: 'Rẻ Hơn Hoàn Tiền', check: parsed.is_best_price_guaranteed },
          { value: 'support_p2h_delivery', lable: 'Giao Hàng Nhanh 2h', check: parsed.support_p2h_delivery },
        ].map((service) => (
          <label className="filter-square" onChange={handleChange} key={service.value}>
            <span>{service.lable}</span>
            <input type="checkbox" checked={service.check} name={service.value} />
            <span className="checkmark" />
          </label>
        ))}
        {/* <label className="filter-square" onClick={freeShip}>
          <span>Miễn Phí Giao Hàng</span>
          <input type="checkbox" checked={parsed.free_ship_badge} />
          <span className="checkmark" />
        </label>
        <label className="filter-square" onClick={bestPrice}>
          <span>Rẻ Hơn Hoàn Tiền</span>
          <input type="checkbox" checked={parsed.is_best_price_guaranteed === '1'} />
          <span className="checkmark" />
        </label>
        <label className="filter-square" onClick={delivery2h}>
          <span>Giao Hàng Nhanh 2h </span>
          <input type="checkbox" checked={parsed.support_p2h_delivery === '1'} />
          <span className="checkmark" />
        </label> */}
      </div>
    </div>
  );
}

export default Service;
