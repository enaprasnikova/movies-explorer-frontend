import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import {useFormWithValidation} from "../useFormWithValidation/useFormWithValidation";

function Register({ handleRegister }) {

  const [response, setResponse] = useState('');

  const {values, handleChange, errors, isValid} = useFormWithValidation({
    name: '',
    email: '',
    password: ''
  });

  const [isError, setIsError] = useState(false);

  function handleSubmit(e){
    e.preventDefault()
    let { password, email, name } = values;
    handleRegister(password, email, name, setIsError, values, setResponse);
  }

  const buttonSelected = (
    `register__submit-button ${!isValid ? 'register__submit-button_inactive' : ''}`
  );

  return (
    <>
      <section className="register">
        <div className="register__top">
          <a href="#" className="register__logo"></a>
          <h1 className="register_welcome">Добро пожаловать!</h1>
        </div>
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          <div className="input-box">
            <label className="input-name" htmlFor="name">Имя</label>
            <input id="name" type="text" name="name" className="register__input" value={values.name} onChange={handleChange}
                   minLength="2" maxLength="30" required pattern="^[а-яА-ЯёЁa-zA-Z-\s]+$"
            />
            <span className="input-error">{errors.name}</span>
          </div>

          <div className="input-box">
            <label className="input-name" htmlFor="email">E-mail</label>
            <input id="email" type="email" name="email" className="register__input" value={values.email} onChange={handleChange}
                   required pattern="\S+@\S+\.\S+"
            />
            <span className="input-error">{errors.email}</span>
          </div>

          <div className="input-box">
            <label className="input-name" htmlFor="password">Пароль</label>
            <input id="password" type="password" name="password" className="register__input" value={values.password} onChange={handleChange}
                   minLength="5" maxLength="30" required
            />
            <span className="input-error">{errors.password}</span>
          </div>

          <span className="register__error"  style={{display: isError ? 'block' : 'none'}}>{response}</span>
          <button type="submit" className={buttonSelected} disabled={!isValid}>Зарегистрироваться</button>
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
