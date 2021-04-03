import { Box, makeStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    '&>li': {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

FilterView.propTypes = {
  fliters: PropTypes.object,
  onChange: PropTypes.func,
};
const FILTER_LIST = [
  {
    id: 1,
    getLable: () => 'Miễn phí giao hàng',
    isActive: (filters) => filters.free_ship_badge,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.free_ship_badge) {
        delete newFilters.free_ship_badge;
      } else {
        newFilters.free_ship_badge = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLable: () => 'Rẻ hơn hoàn tiền',
    isActive: () => true,
    isVisible: (filters) => filters.is_best_price_guaranteed,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.is_best_price_guaranteed;
      return newFilters;
    },
    // onToggle: (filters) => {},
  },
  {
    id: 3,
    getLable: () => 'Giao nhanh 2h',
    isActive: () => true,
    isVisible: (filters) => filters.support_p2h_delivery,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.support_p2h_delivery;
      return newFilters;
    },
    // onToggle: (filters) => {},
  },
  {
    id: 4,
    getLable: (filters) => `Từ ${filters.min} đến ${filters.max}`,
    isActive: (filters) => true,
    isVisible: (filters) => Object.keys(filters).includes('min') && Object.keys(filters).includes('max'),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.min;
      delete newFilters.max;
      return newFilters;
    },
    // onToggle: (filters) => {},
  },
  {
    id: 5,
    getLable: (filters) => `Từ ${filters.rating_average} sao`,
    isActive: (filters) => true,
    isVisible: (filters) => Object.keys(filters).includes('rating_average'),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.rating_average;
      return newFilters;
    },
  },
];
function FilterView({ filters = {}, onChange = null }) {
  const classes = useStyle();

  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((e) => e.isVisible(filters));
  }, [filters]);

  return (
    <div className="row ">
      <div className="col-lg-3 "></div>
      <div className="col-lg-9 filter-list">
        <p className="applied-filter">Bộ lọc:</p>
        <ul className={classes.root}>
          {visibleFilters.map((e) => (
            <li key={e.id}>
              <Chip
                size="small"
                label={e.getLable(filters)}
                color={e.isActive(filters) ? 'secondary' : 'default'}
                clickable={!e.isRemovable}
                onClick={
                  e.isRemovable
                    ? null
                    : () => {
                        if (!onChange) return;
                        const newFilters = e.onToggle(filters);
                        onChange(newFilters);
                      }
                }
                onDelete={
                  e.isRemovable
                    ? () => {
                        if (!onChange) return;
                        const newFilters = e.onRemove(filters);
                        onChange(newFilters);
                      }
                    : null
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterView;
