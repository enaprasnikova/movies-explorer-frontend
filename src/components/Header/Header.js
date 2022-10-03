import React from 'react';
import {Link} from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";

function Header({name, width, isOpen, onClick, onClose, loggedIn}) {

  return (
    <header className={`header header_type_${name}`}>
      <div className="header__container">
        <a href="/" className="header__logo"></a>

        {!loggedIn ? <div className="header-main">
          <Link to="/signup" className="header-main__signup">Регистрация</Link>
          <Link to="/signin" className="header-main__signin">Войти</Link>
          </div> : width <= 768 ? <BurgerMenu isOpen={isOpen} onClick={onClick} onClose={onClose}/> : <Navigation/>}
      </div>
    </header>
  )
}

export default Header;
