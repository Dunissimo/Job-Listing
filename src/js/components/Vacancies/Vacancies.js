import React from "react";

import data from "../../../data.json";

import VacancyItem from "../VacancyItem/VacancyItem";

import "./Vacancies.css";

const Vacancies = ({ filters, addFilter }) => {
  const newData = Object.assign(data);

  let toRender = [],
    companiesToRender = [],
    params = [];

  newData.forEach((company) => {
    const { languages, level, role, tools } = company;
    params = [...languages, level, role, ...tools];

    const isFiltersPassed = filters.every(({ filter }) =>
      params.includes(filter.text)
    );

    if (isFiltersPassed) companiesToRender.push(company);
  });

  // If there are no filters, then we carry out all the vacancies. (Если фильтров нет, то вывожу все вакансии.)

  if (companiesToRender.length === 0) renderCompanies(newData);

  renderCompanies(companiesToRender);

  function renderCompanies(item) {
    item.forEach((company, id) => {
      toRender.push(
        <VacancyItem
          key={id}
          dataLength={data.length}
          company={company}
          addFilter={addFilter}
        />
      );
    });
  }

  return <section className="vacancies">{toRender}</section>;
};

export default Vacancies;
