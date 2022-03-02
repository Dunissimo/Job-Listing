import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Vacancies from "../Vacancies/Vacancies";
import FilterPanel from "../FilterPanel/FilterPanel";
import Attr from "../Attr/Attr";

import "./App.css";

// class App extends React.Component {
//   state = {
//     filters: [],
//   };

//   addFilter = (filter) => {
//     const isOnce = this.state.filters.filter(({ filter: fill }) => {
//       return filter.text === fill.text;
//     });

//     if (isOnce.length > 0) {
//       return;
//     }

//     const newArr = [...this.state.filters, { filter }];
//     this.setState({ filters: newArr });
//   };

//   clearFilter = (id) => {
//     const newArr = this.state.filters.filter(
//       ({ filter: fill }) => fill.id !== id
//     );

//     this.setState({ filters: newArr });
//   };

//   clearAllFilters = () => {
//     this.setState({ filters: [] });
//   };

//   componentDidUpdate(prevState) {
//     if (prevState.filters !== this.state.filters) {
//       if (this.state.filters.length < 1) {
//         document.querySelector(".filters-panel").classList.remove("active");
//         document.querySelector(".filters-panel").classList.add("hide");

//         return;
//       }
//     }
//   }

//   render() {
//     return (
//       <div className="app">
//         <Header />
//         <FilterPanel
//           filters={this.state.filters}
//           clearFilter={this.clearFilter}
//           clearAllFilters={this.clearAllFilters}
//         />
//         <Vacancies addFilter={this.addFilter} filters={this.state.filters} />
//         <Attr />
//       </div>
//     );
//   }
// }

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
      <FilterPanel
        filters={filters}
        className={className}
        clearFilter={clearFilter}
        clearAllFilters={clearAllFilters}
      />
      <Vacancies addFilter={addFilter} filters={filters} />
      <Attr />
    </div>
  );
};

export default App;
