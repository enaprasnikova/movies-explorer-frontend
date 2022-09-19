import React from 'react';

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__creators">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer_date">&copy; 2022</p>
        <ul className="footer__list">
          <li className="footer__network">
            <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank">Яндекс.Практикум</a>
          </li>
          <li className="footer__network">
            <a href="https://github.com/enaprasnikova" className="footer__link" target="_blank">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
