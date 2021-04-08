import { Checkbox, FormControlLabel } from '@material-ui/core';
import useRenderStart from 'hooks/useRenderStart';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';
FilterByRating.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

function FilterByRating({ onChange, filters = {} }) {
  //   const [values, setValues] = useState({
  //     free_ship_badge: Boolean(filters.free_ship_badge),
  //     is_best_price_guaranteed: Boolean(filters.is_best_price_guaranteed),
  //     support_p2h_delivery: Boolean(filters.support_p2h_delivery),
  //   });
  const handleChange = (e) => {
    if (!onChange) return;
    const { name } = e.target;
    onChange(name);
  };

  return (
    <div className="brands">
      <div className="check2">
        <h2 className="title">Đánh giá</h2>
        <ul>
          {[
            { rating_average: '5', label: useRenderStart(5) },
            { rating_average: '4', label: useRenderStart(4) },
            { rating_average: '3', label: useRenderStart(3) },
          ].map((service) => (
            <li key={service.rating_average}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={service.rating_average === filters.rating_average}
                    onChange={handleChange}
                    name={service.rating_average}
                    color="default"
                  />
                }
                label={service.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterByRating;
