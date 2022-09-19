import React from 'react';
import {Link} from "react-router-dom";

function Login() {

  return (
    <section className="login">
      <div className="login__top">
        <a href="/" className="login__logo"></a>
        <h1 className="login__welcome">Рады видеть!</h1>
      </div>

      <form className="login__form">
        <div className="input-box">
          <label className="input-name" htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" className="login__input"/>
        </div>

        <div className="input-box">
          <label className="input-name" htmlFor="password">Пароль</label>
          <input id="password" type="password" className="login__input"/>
        </div>

        <button type="submit" className="login__submit-button">Войти</button>
      </form>

      <div className="login__sign-in">
        <p className="login__text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__login-link">Регистрация</Link>
      </div>
    </section>
  )
}

export default Login;
