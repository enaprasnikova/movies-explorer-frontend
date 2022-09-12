import React from 'react';

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__caption">Портфолио</h2>
      <ul className="container-project">
        <li className="project-info">
          <p className="project-info__name">Статичный сайт</p>
          <a href="https://github.com/enaprasnikova/how-to-learn" className="project-info__link" target="_blank"></a>
        </li>

        <li className="project-info">
          <p className="project-info__name">Адаптивный сайт</p>
          <a href="https://github.com/enaprasnikova/russian-travel" className="project-info__link" target="_blank"></a>
        </li>

        <li className="project-info">
          <p className="project-info__name">Одностраничное приложение</p>
          <a href="https://github.com/enaprasnikova/react-mesto-api-full" className="project-info__link" target="_blank"></a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
