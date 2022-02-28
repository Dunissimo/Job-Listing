import React from "react";

import data from "../../../data.json";

import VacancyItem from "../VacancyItem/VacancyItem";

import "./Vacancies.css";

const Vacancies = ({ filters, addFilter }) => {
  const newData = Object.assign(data);

  let toRender = [];
  let companiesToRender = [];
  let params = [];

  newData.forEach((comp) => {
    params = [...comp.languages, comp.level, comp.role, ...comp.tools];

    const isFiltersPassed = filters.every(({ filter }) =>
      params.includes(filter.text)
    );

    if (isFiltersPassed) companiesToRender.push(comp);
  });

  // If there are no filters, then we carry out all the vacancies. (Если фильтров нет, то вывожу все вакансии.)

  if (companiesToRender.length === 0) {
    renderCompanies(newData);
  }

  renderCompanies(companiesToRender);

  function renderCompanies(item) {
    item.forEach((comp, id) => {
      toRender.push(
        <VacancyItem
          key={id}
          dataLength={data.length}
          company={comp}
          addFilter={addFilter}
        />
      );
    });
  }

  return <section className="vacancies">{toRender}</section>;
};

export default Vacancies;
