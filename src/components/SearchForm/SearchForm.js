import React from 'react';
import {useState} from 'react';

function SearchForm({ handleSearchMovies, parameter, checkboxParameter, handleSearchShortMovies }) {

  const [isError, setIsError] = useState(false);
  const [searchForm, setSearchForm] = useState(parameter || '');
  const [checkbox, setCheckbox] = useState(checkboxParameter || false);

  const handleChangeSearchForm = (e) => {
    setSearchForm(e.target.value)
  }

  const handleChangeCheckBox = (e) => {
    setCheckbox(e.target.checked);
    handleSearchShortMovies(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (searchForm.length === 0) {
      setIsError(true);
    } else {
      setIsError(false);
      handleSearchMovies(searchForm);
    }
  }


  return (
    <section className="search-form">
      <form className="form" onSubmit = {handleSubmit}>
        <div className="form__container">
          <input
            type="text"
            className="form__search"
            placeholder="Фильм"
            value={searchForm}
            onChange={handleChangeSearchForm}
          />
          <button className="form__button" type="submit">Поиск</button>
        </div>
        <span className="search-form__error" style={{display: isError ? 'block' : 'none'}}>Нужно ввести ключевое слово</span>
        <div className="search-form__slider">
          <div className="checkbox">
            <input className="checkbox__input" type="checkbox" id="checkbox" checked={checkbox} onChange={handleChangeCheckBox}/>
            <label className="checkbox__slider" htmlFor="checkbox"></label>
          </div>
          <h1 className="checkbox__caption">Короткометражки</h1>
        </div>
      </form>
    </section>

  )
}

export default SearchForm;
