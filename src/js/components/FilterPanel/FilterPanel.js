import React from "react";

import "./FilterPanel.css";

const FilterPanel = ({ filters, clearFilter, clearAllFilters, className }) => {
  const arr = filters.map(({ filter }, id) => {
    return (
      <li key={id}>
        <h2>{filter.text}</h2>
        <button
          onClick={() => {
            clearFilter(filter.id);
          }}
        >
          <img src="./images/icon-remove.svg" alt="delete" />
        </button>
      </li>
    );
  });

  return (
    <div className={`filters-panel ${className}`}>
      <div className="filters-wrapper">
        <ul className="filters">{arr}</ul>
        <button className="clear" onClick={clearAllFilters}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
