import { Checkbox, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';
FilterByService.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

function FilterByService({ onChange, filters = {} }) {
  //   const [values, setValues] = useState({
  //     free_ship_badge: Boolean(filters.free_ship_badge),
  //     is_best_price_guaranteed: Boolean(filters.is_best_price_guaranteed),
  //     support_p2h_delivery: Boolean(filters.support_p2h_delivery),
  //   });

  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <div className="brands">
      <div className="check2">
        <h2 className="title">Dịch vụ</h2>
        <ul>
          {[
            { value: 'free_ship_badge', label: 'Miễn Phí Giao Hàng' },
            { value: 'is_best_price_guaranteed', label: 'Rẻ Hơn Hoàn Tiền' },
            { value: 'support_p2h_delivery', label: 'Giao Hàng Nhanh 2h' },
          ].map((service) => (
            <li key={service.value}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters[service.value]}
                    onChange={handleChange}
                    name={service.value}
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

export default FilterByService;
