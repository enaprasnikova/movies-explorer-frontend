import React from 'react';
import studentPatch from "../../images/student.png";

function AboutMe() {

  return (
    <section className="about-me">
      <h1 className="about-me__student">Студент</h1>
      <div className="about-me__container">

        <ul className="info-container">
          <li className="info-container__name">Виталий</li>
          <li className="info-container__job">Фронтенд-разработчик, 30 лет</li>
          <li className="info-container__life">
            Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </li>
          <li className="info-container__link">
            <a href="https://github.com/enaprasnikova" className="link" target="_blank">Github</a>
          </li>
        </ul>

        <img src={studentPatch} className="about-me__photo" alt="Фото студента"/>
      </div>
    </section>
  )
}

export default AboutMe;
