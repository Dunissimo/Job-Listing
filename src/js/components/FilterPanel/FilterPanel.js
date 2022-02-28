import React from "react";

import "./FilterPanel.css";

const FilterPanel = ({ filters, clearFilter, clearAllFilters }) => {
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
    <div className="filters-panel">
      <ul className="filters-wrapper">
        <div className="filters">{arr}</div>
        <button className="clear" onClick={clearAllFilters}>
          Clear
        </button>
      </ul>
    </div>
  );
};

export default FilterPanel;
