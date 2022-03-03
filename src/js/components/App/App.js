import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Vacancies from "../Vacancies/Vacancies";
import FilterPanel from "../FilterPanel/FilterPanel";
import Attr from "../Attr/Attr";

import "./App.css";

const App = () => {
  const [filters, setFilters] = useState([]);
  const [className, setClassName] = useState("hide");

  const addFilter = (filter) => {
    // Check on copies (Проверка на копии)

    const isOnce = filters.filter(({ filter: fill }) => {
      return filter.text === fill.text;
    });

    if (isOnce.length > 0) {
      return;
    }

    const newArr = [...filters, { filter }];

    document.body.scrollTo(0, 0);

    setFilters(newArr);
    setClassName("active");
  };

  const clearFilter = (id) => {
    const newArr = filters.filter(({ filter: fill }) => fill.id !== id);

    setFilters(newArr);
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  useEffect(() => {
    if (filters.length < 1) {
      setClassName("hide");

      return;
    }
  }, [filters]);

  return (
    <div className="app">
      <Header />

      <main className="content">
        <FilterPanel
          filters={filters}
          className={className}
          clearFilter={clearFilter}
          clearAllFilters={clearAllFilters}
        />
        <Vacancies addFilter={addFilter} filters={filters} />
      </main>
      <Attr />
    </div>
  );
};

export default App;
