import React from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";
import {useFormWithValidation} from "../useFormWithValidation/useFormWithValidation";

function Login({ handleAuthorize }) {

  const [response, setResponse] = useState('');

  const {values, handleChange, errors, isValid} = useFormWithValidation({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault()
    if (!values.email || !values.password) {
      return;
    }
    handleAuthorize(values, setResponse, setIsError)
  }

  const buttonSelected = (
    `login__submit-button ${!isValid ? 'login__submit-button_inactive' : ''}`
  );

  return (
    <section className="login">
      <div className="login__top">
        <a href="/" className="login__logo"></a>
        <h1 className="login__welcome">Рады видеть!</h1>
      </div>

      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <div className="input-box">
          <label className="input-name" htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" className="login__input" value={values.email}
                 onChange={handleChange}
                 required pattern="\S+@\S+\.\S+"
          />
          <span className="input-error">{errors.email}</span>
        </div>

        <div className="input-box">
          <label className="input-name" htmlFor="password">Пароль</label>
          <input id="password" type="password" name="password" className="login__input" value={values.password}
                 onChange={handleChange}
                 minLength="5" maxLength="30" required
          />
          <span className="input-error">{errors.password}</span>
        </div>

        <span className="login__error" style={{display: isError ? 'block' : 'none'}}>{response}</span>
        <button type="submit" className={buttonSelected} disabled={!isValid}>Войти</button>
      </form>

      <div className="login__sign-in">
        <p className="login__text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__login-link">Регистрация</Link>
      </div>
    </section>
  )
}

export default Login;
