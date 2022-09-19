import React from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Preloader from "../Preloader/Preloader";

function Movies({ width, isOpen, onClick, onClose }) {


  return (
    <>
      <Header
        name={"movies"}
        children={
          width <= 768 ? <BurgerMenu  isOpen={isOpen} onClick={onClick} onClose={onClose}/> : <Navigation />
        }
      />

      <main className="page">
        <SearchForm/>
        <MoviesCardList/>
        <Preloader />
      </main>
    </>

  )
}

export default Movies;
