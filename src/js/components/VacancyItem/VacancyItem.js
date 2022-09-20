import React from "react";

import "./VacancyItem.css";

const VacancyItem = ({ company, addFilter, dataLength }) => {
  const {
    id,
    company: comp,
    logo,
    contract,
    postedAt,
    location,
    position,
    languages,
    level,
    role,
    tools,
    new: neww,
    featured,
  } = company;

  const isNew = neww ? <div className="new">NEW!</div> : null;

  const isFeatured = featured ? <div className="featured">FEATURED</div> : null;

  return (
    <section className={`vacancy-item ${featured ? "featured" : ""}`} key={id}>
      <img
        className="vacancy-item__img"
        src={`./images/${logo.slice(9)}`}
        alt="company"
      />
      <div className="vacancy-item__top">
        <div className="vacancy-item__company-name-n-params">
          <h2>{comp}</h2>
          {isNew}
          {isFeatured}
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
