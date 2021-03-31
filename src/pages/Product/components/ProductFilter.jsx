import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      categories: newCategoryId,
    };
    onChange(newFilters);
  };
  const handlePriceChange = (newPrice) => {
    if (onChange) onChange(newPrice);
  };
  const handleServiceChange = (newService) => {
    if (onChange) onChange(newService);
  };

  return (
    <>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByService onChange={handleServiceChange} filters={filters} />
      <FilterByPrice onChange={handlePriceChange} filters={filters} />
    </>
  );
}

export default ProductFilter;
