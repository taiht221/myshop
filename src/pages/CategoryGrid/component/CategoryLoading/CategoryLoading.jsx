import React from 'react';
import './style.scss';
export default function CategoryLoading() {
  return (
    <div className="loading-state">
      <div className="col-lg-3 category__left">
        <div className="categories --loading">
          <h2 className="title">loadings</h2>
          <ul>
            <li>
              <span className="category-name">loading</span>
              <span className="select-filter">loading</span>
            </li>
            <li>
              <span className="category-name">loading</span>
              <span className="select-filter">loading</span>
            </li>
            <li>
              <span className="category-name">loading</span>
              <span className="select-filter">loading</span>
            </li>
            <li>
              <span className="category-name">loading</span>
              <span className="select-filter">loading</span>
            </li>
          </ul>
        </div>
        <div className="brands --loading">
          <div className="check2">
            <h2 className="title">Brands</h2>
            <label className="filter-square">
              <span>Filtre by brand item</span>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="filter-square">
              <span>Filtre by brand item</span>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="filter-square">
              <span>Filtre by brand item</span>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="filter-square">
              <span>Filtre by brand item</span>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="filter-square">
              <span>Filtre by brand item</span>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <div className="rating --loading">
          <h2 className="title">Rating</h2>
          <div className="check2">
            <label className="filter-square">
              <span>Loading</span>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="filter-square">
              <span>Loading</span>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="filter-square">
              <span>Loading</span>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="filter-square">
              <span>Loading</span>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="filter-square">
              <span>Loading</span>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
