import React, {useContext, useEffect, useState} from 'react';
import Header from "../Header/Header";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';


function Profile({width, isOpen, onClick, onClose, signOut, handleUpdateUser, loggedIn}) {

  const user = useContext(CurrentUserContext);

  const [isHide, setIsHide] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [response, setResponse] = useState('');

  useEffect(() => {
    setEmail(user.email)
    setName(user.name)
  }, [user])

  const handleChangeName = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    if (target.validationMessage.length !== 0) {
      setErrors({
        ...errors,
        [name]: "Поле может содержать только латиницу, кириллицу, пробел или дефис. Длина от 2 до 30 симв."
      });
    } else {
      setErrors({...errors, [name]: target.validationMessage});
    }
    setName(value)
    setIsValid(target.closest("form").checkValidity());
  }

  const handleChangeEmail = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setErrors({...errors, [name]: target.validationMessage});
    setEmail(value)
    setIsValid(target.closest("form").checkValidity());
  }

  function changeDisplay(e) {
    e.preventDefault()
    setIsHide(!isHide);
    setIsDisabled(!isDisabled);
    setResponse('');
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleUpdateUser(name, email, handleSuccessResponse, handleErrorResponse)
  }

  function handleSuccessResponse(msg) {
    setResponse(msg)
    setIsHide(true);
    setIsDisabled(true);
    setIsValid(false);
  }

  function handleErrorResponse(msg) {
    setResponse(msg)
  }

  const buttonSelected = (
    `profile__save ${!isValid ? 'register__submit-button_inactive' : ''}`
  );

  return (
    <>

      <Header
        name={"movies"}
        onClick={onClick}
        isOpen={isOpen}
        onClose={onClose}
        width={width}
        loggedIn={loggedIn}
      />

      <section className="profile">
        <h1 className="profile__name">{`Привет, ${user.name}!`}</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="info-box">
            <label htmlFor="name" className="info-box__name">Имя</label>
            <input type="text" className="info-box__input" name="name" value={name || ''} onChange={handleChangeName}
                   disabled={isDisabled} pattern="^[а-яА-ЯёЁa-zA-Z-\s]+$" minLength="2" maxLength="30" required
            />
          </div>
          <span className="input-error">{errors.name}</span>

          <div className="info-box">
            <label htmlFor="email" className="info-box__name">E-mail</label>
            <input type="email" className="info-box__input" name="email" value={email || ''}
                   onChange={handleChangeEmail}
                   disabled={isDisabled} pattern="\S+@\S+\.\S+" required
            />
          </div>
          <span className="input-error">{errors.email}</span>

          <div className="container-button">
            <span className="change-response">{response}</span>
            <button type="submit" className={buttonSelected} style={{display: isHide ? 'none' : 'block'}}
                    disabled={!isValid}>Сохранить
            </button>
          </div>

          <div className="button-profile" style={{display: isHide ? 'flex' : 'none'}}>
            <button type="text" className="profile__edit-button" onClick={changeDisplay}>Редактировать</button>
            <button className="profile__exit-button" type="text" onClick={signOut}>Выйти из аккаунта</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Profile;
