import React from "react";

import Header from "../Header/Header";
import Vacancies from "../Vacancies/Vacancies";
import FilterPanel from "../FilterPanel/FilterPanel";
import Attr from "../Attr/Attr";

import "./App.css";

class App extends React.Component {
  state = {
    filters: [],
  };

  addFilter = (filter) => {
    const isOnce = this.state.filters.filter(({ filter: fill }) => {
      return filter.text === fill.text;
    });

    if (isOnce.length > 0) {
      return;
    }

    const newArr = [...this.state.filters, { filter }];
    this.setState({ filters: newArr });
  };

  clearFilter = (id) => {
    const newArr = this.state.filters.filter(
      ({ filter: fill }) => fill.id !== id
    );

    this.setState({ filters: newArr });
  };

  clearAllFilters = () => {
    this.setState({ filters: [] });
  };

  componentDidUpdate(prevState) {
    if (prevState.filters !== this.state.filters) {
      if (this.state.filters.length < 1) {
        document.querySelector(".filters-panel").classList.remove("active");
        document.querySelector(".filters-panel").classList.add("hide");

        return;
      }
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <FilterPanel
          filters={this.state.filters}
          clearFilter={this.clearFilter}
          clearAllFilters={this.clearAllFilters}
        />
        <Vacancies addFilter={this.addFilter} filters={this.state.filters} />
        <Attr />
      </div>
    );
  }
}

export default App;
