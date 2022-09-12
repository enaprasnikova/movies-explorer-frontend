import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import iconAccountPatch from "../../images/icon-account.svg";

function Navigation() {
  const location = useLocation();

  const moviesSelected = (
    `navigation__movies ${location.pathname === '/movies' ? 'navigation__movies_active' : ''}`
  );

  const moviesSavedSelected = (
    `navigation__movies ${location.pathname === '/saved-movies' ? 'navigation__movies_active' : ''}`
  );

  return (
    <section className="navigation">
      <div className="navigation__links">
        <Link to="/movies" className={moviesSelected}>Фильмы</Link>
        <Link to="/saved-movies" className={moviesSavedSelected}>Сохранённые фильмы</Link>
      </div>
      <Link to="/profile" className="navigation__account">
        <img src={iconAccountPatch} className="navigation__icon" alt="Иконка перехода в аккаунт."/>
        <h2 className="navigation__button-account">Аккаунт</h2>
      </Link>
    </section>

  )
}

export default Navigation;
