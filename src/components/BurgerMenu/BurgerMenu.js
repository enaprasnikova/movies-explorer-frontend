import React from 'react';
import {Link} from "react-router-dom";
import iconAccountPatch from "../../images/icon-account.svg";


function BurgerMenu({isOpen, onClick, onClose}) {

  return (
    <>
      <button className="menu" onClick={onClick} type="button"></button>
      <div className={`container-menu ${isOpen ?'container-menu_opened' : ''}`}>
        <div className="menu-white">
          <button className="menu menu-white__close" onClick={onClose} type="button"></button>
          <ul className="container-menu__links">
            <li className="container-menu__link">
              <Link to="/" className="container-menu__text">Главная</Link>
            </li>
            <li className="container-menu__link">
              <Link to="/movies" className="container-menu__text">Фильмы</Link>
            </li>
            <li className="container-menu__link">
              <Link to="/saved-movies" className="container-menu__text">Сохранённые фильмы</Link>
            </li>
          </ul>
          <Link to="/profile" className="navigation__account btn-burger">
            <img src={iconAccountPatch} className="navigation__icon" alt="Иконка перехода в аккаунт."/>
            <h2 className="navigation__button-account">Аккаунт</h2>
          </Link>
        </div>
      </div>
    </>

  )
}

export default BurgerMenu;
