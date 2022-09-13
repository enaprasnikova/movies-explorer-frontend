import React, {useState} from 'react';
import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";

function Profile({ width, isOpen, onClick, onClose }) {

  const [isHide, setIsHide] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  function changeDisplay() {
    setIsHide(!isHide);
    setIsDisabled(!isDisabled)
  }

  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <>
      <Header
        name={"movies"}
        children={
          width <= 768 ? <BurgerMenu  isOpen={isOpen} onClick={onClick} onClose={onClose}/> : <Navigation />
        }
      />

      <section className="profile">
        <h1 className="profile__name">Привет, Виталий!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="info-box">
            <label htmlFor="name" className="info-box__name">Имя</label>
            <input type="text" className="info-box__input" name="name" value="Виталий" disabled={isDisabled}/>
          </div>
          <div className="info-box">
            <label htmlFor="email" className="info-box__name">E-mail</label>
            <input type="email" className="info-box__input" name="email" value="pochta@yandex.ru" disabled="disabled"/>
          </div>
          <button type="submit" className="profile__save" style={{display: isHide? 'none' : 'block'}}>Сохранить</button>
          <div className="button-profile" style={{display: isHide ? 'flex' : 'none'}}>
            <button type="text" className="profile__edit-button" onClick={changeDisplay}>Редактировать</button>
            <button className="profile__exit-button" type="text">Выйти из аккаунта</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Profile;
