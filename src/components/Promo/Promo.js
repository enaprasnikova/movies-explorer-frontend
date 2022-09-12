import React from 'react';
import logoPromoPath from  '../../images/logo-promo.png';

function Promo() {

  return (
      <section className="promo">
        <div className="promo__container">
          <div className="promo__text-container">
            <h1 className="promo__text">
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className="promo__info">
              Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </p>
          </div>
          <img src={logoPromoPath}
               className="promo__logo"
               alt="Планета Земля, состоящая из слова WEB."
          />
        </div>
        <a href="#info" className="promo__button-info">Узнать больше</a>
      </section>
  )
}

export default Promo;
