import React from "react";

import "./VacancyItem.css";

const VacancyItem = ({ company, addFilter, dataLength }) => {
  const {
    id,
    logo,
    contract,
    postedAt,
    location,
    position,
    languages,
    level,
    role,
    tools,
  } = company;

  const neww = company.new ? <div className="new">NEW!</div> : null;

  const featured = company.featured ? (
    <div className="featured">FEATURED</div>
  ) : null;

  return (
    <section
      className={`vacancy-item ${company.featured ? "featured" : ""}`}
      key={company.id}
    >
      <img
        className="vacancy-item__img"
        src={`./images/${logo.slice(9)}`}
        alt="company"
      />
      <div className="vacancy-item__top">
        <div className="vacancy-item__company-name-n-params">
          <h2>{company.company}</h2>
          {neww}
          {featured}
        </div>
        <h3>{position}</h3>
        <div className="vacancy-item__details">
          <ul>
            <li>{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>

      <div className="vacancy-item__bottom">
        {[...languages, ...tools, level, role].map((lang) => {
          return (
            <button
              key={lang}
              onClick={(e) => {
                document
                  .querySelector(".filters-panel")
                  .classList.remove("hide");

                document
                  .querySelector(".filters-panel")
                  .classList.add("active");

                document.body.scrollTo(0, 0);

                addFilter({
                  text: e.target.textContent,
                  id: `${id}${e.target.textContent}`,
                });
              }}
            >
              {lang}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default VacancyItem;
