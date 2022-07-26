import React from 'react';
import linkPortfolioPatch from "../../images/link-portfolio.svg";

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__caption">Портфолио</h2>
      <ul className="container-project">
        <li>
          <a href="https://github.com/enaprasnikova/how-to-learn" className="project-info" target="_blank">
            <span className="project-info__name">Статичный сайт</span>
            <img src={linkPortfolioPatch} className="project-info__link" alt="Иконка ссылки."/>
          </a>
        </li>

        <li>
          <a href="https://github.com/enaprasnikova/russian-travel" className="project-info" target="_blank">
            <span className="project-info__name">Адаптивный сайт</span>
            <img src={linkPortfolioPatch} className="project-info__link" alt="Иконка ссылки."/>
          </a>

        </li>
        <li>
          <a href="https://github.com/enaprasnikova/react-mesto-api-full" className="project-info" target="_blank">
            <span className="project-info__name">Одностраничное приложение</span>
            <img src={linkPortfolioPatch} className="project-info__link" alt="Иконка ссылки."/>
          </a>
        </li>


      </ul>
    </section>
  )
}

export default Portfolio;
