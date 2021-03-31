import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import categorytApi from 'Apis/categoryApi';
import { Link } from 'react-router-dom';
import CategorySkeletonLoading from '../SkeletonLoading/CategorySkeletonLoading';
import { useSelector } from 'react-redux';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const categoryList = useSelector((state) => state.category);

  const handelCategoryClick = (e) => {
    if (onChange) {
      onChange(e.id);
    }
  };
  return (
    <div className="categories">
      {categoryList.loading ? (
        <CategorySkeletonLoading />
      ) : (
        <>
          <h2 className="title">Danh mục sản phẩm </h2>
          <ul>
            {categoryList.categoryData.map((e, i) => (
              <li key={e.id}>
                <Link
                  to={`/search/${e.slug}`}
                  className="category-name"
                  onClick={() => {
                    handelCategoryClick(e);
                  }}
                >
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default FilterByCategory;
