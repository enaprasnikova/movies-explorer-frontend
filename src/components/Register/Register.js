import React from 'react';
import {Link} from "react-router-dom";

function Register() {

  return (
    <>
      <section className="register">
        <div className="register__top">
          <a href="#" className="register__logo"></a>
          <h1 className="register_welcome">Добро пожаловать!</h1>
        </div>
        <form className="register__form">
          <div className="input-box">
            <label className="input-name" htmlFor="name">Имя</label>
            <input id="name" type="text" name="name" className="register__input" placeholder="Виталий"/>
          </div>

          <div className="input-box">
            <label className="input-name" htmlFor="email">E-mail</label>
            <input id="email" type="email" name="email" className="register__input"/>
          </div>

          <div className="input-box">
            <label className="input-name" htmlFor="password">Пароль</label>
            <input id="password" type="password" className="register__input"/>
          </div>

          <button type="submit" className="register__submit-button">Зарегистрироваться</button>
        </form>

        <div className="register__sign-in">
          <p className="register__text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__login-link">Войти</Link>
        </div>
      </section>

    </>

  )
}

export default Register;
