import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {savedMoviesHelper} from "../../helpers/SavedMoviesHelper";
import {api} from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import {moviesHelper} from "../../helpers/MoviesHelper";

function SavedMovies({width, isOpen, onClick, onClose, loggedIn}) {

  const [movies, setMovies] = useState(savedMoviesHelper.getMovies());
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isEmpty, setEmpty] = useState(false);

  const handleSearchMovies = (parameter) => {
    setLoading(true);
    api.getSavedMovies()
      .then((moviesList) => {
        savedMoviesHelper.searchMovies(moviesList, parameter);
        const arr = savedMoviesHelper.getMovies();
        setEmpty(arr.length === 0);
        setMovies(arr);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }

  const handleSearchShortMovies = (parameter) => {
    savedMoviesHelper.setShowShort(parameter);
    const arr = savedMoviesHelper.getMovies();
    setEmpty(arr.length === 0);
    setMovies(arr);
  }

  const handleOnMovieClick = (movie) => {
    api.deleteMovie(movie._id)
      .then((deletedCard) => {
        moviesHelper.dislikeMovie(movie);
        savedMoviesHelper.deleteMovie(movie);
        setMovies((state) => state.filter((el) => el._id !== deletedCard._id))
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }


  useEffect(() => {
    handleSearchMovies();
  }, [])

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

      <main className="page">
        <SearchForm
          handleSearchMovies={handleSearchMovies}
          parameter={savedMoviesHelper.getSearchParam()}
          checkboxParameter={savedMoviesHelper.getShowShort()}
          handleSearchShortMovies={handleSearchShortMovies}
        />
        {loading ? <Preloader/> :
          <MoviesCardList
            movies={movies}
            onMovieClick={handleOnMovieClick}
            noMoreFilms={true}
            isError={isError}
            isEmpty={isEmpty}
          />
        }
      </main>
    </>

  )
}

export default SavedMovies;
