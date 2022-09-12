import React from 'react';

function AboutProject() {

  return (
    <section className="project">

      <h1 className="project__info" id="info">О проекте</h1>

      <ul className="container-info">
        <li className="project__content">
          <h2 className="project__about">Дипломный проект включал 5 этапов</h2>
          <p className="project__text">
            Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="project__content">
          <h2 className="project__about">На выполнение диплома ушло 5 недель</h2>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <div className="container-time">
        <h2 className="project__time project__time_back">1 неделя</h2>
        <h2 className="project__time project__time_front">4 недели</h2>
        <p className="project__stage">Back-end</p>
        <p className="project__stage">Front-end</p>
      </div>

    </section>
  )
}

export default AboutProject;
