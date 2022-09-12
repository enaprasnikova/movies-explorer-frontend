import React from 'react';

function SearchForm() {

  return (
    <section className="search-form">
      <form className="form">
        <div className="form__container">
          <input
            type="text"
            className="form__search"
            placeholder="Фильм"
          />
          <button className="form__button">Поиск</button>
        </div>

        <div className="search-form__slider">
          <div className="checkbox">
            <input className="checkbox__input" type="checkbox" id="checkbox"/>
            <label className="checkbox__slider" htmlFor="checkbox"></label>
          </div>
          <h1 className="checkbox__caption">Короткометражки</h1>
        </div>
      </form>
    </section>

  )
}

export default SearchForm;
