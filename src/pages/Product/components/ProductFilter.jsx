import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';
import FilterByRating from './Filters/FilterByRating';

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
  const handleRatingChange = (newRating) => {
    if (!onChange) return;
    const newFilters = {
      rating_average: newRating,
    };
    onChange(newFilters);
  };
  return (
    <>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByRating onChange={handleRatingChange} filters={filters} />
      <FilterByPrice onChange={handlePriceChange} filters={filters} />
      <FilterByService onChange={handleServiceChange} filters={filters} />
    </>
  );
}

export default ProductFilter;
