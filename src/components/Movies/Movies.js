import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import {moviesHelper} from "../../helpers/MoviesHelper";
import {movieApi} from "../../utils/MoviesApi";
import {getStartCountAndOffset} from "../../helpers/CountCardsHelper";
import {api} from "../../utils/MainApi";
import {savedMoviesHelper} from "../../helpers/SavedMoviesHelper";

function Movies({width, isOpen, onClick, onClose, loggedIn}) {

  const [config, setConfig] = useState(getStartCountAndOffset(width));
  const [movies, setMovies] = useState(moviesHelper.getMovies(config.count));
  const [loading, setLoading] = useState(false);
  const [noMoreMovies, setNoMoreMovies] = useState(true);
  const [isError, setError] = useState(false);
  const [isEmpty, setEmpty] = useState(false);

  useEffect(() => {
    movieApi.getInitialMovies()
      .then((movieList) => {
        moviesHelper.saveAllMovies(movieList);
      })
      .catch(() => setError(true))
  }, [])

  useEffect(() => {
    const config = getStartCountAndOffset(width);
    setConfig(config);
    setMovies(moviesHelper.getMovies(config.count));
  }, [width])

  useEffect(() => {
    setMovies(moviesHelper.getMovies(config.count));
    setNoMoreMovies(moviesHelper.isNoMoreMovies(config.count));
  }, [config])

  const handleSearchMovies = (parameter) => {
    setLoading(true);
    api.getSavedMovies() //Обновляем информацию о сохраненых фильмах
      .then((moviesList) => {
        savedMoviesHelper.searchAllMovies(moviesList)
        const config = getStartCountAndOffset(width);
        setConfig(config);
        moviesHelper.searchMovies(parameter);
        setNoMoreMovies(moviesHelper.isNoMoreMovies(config.count));
        const arr = moviesHelper.getMovies(config.count);
        setEmpty(arr.length === 0);
        setMovies(arr);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }

  const handleSearchShortMovies = (parameter) => {
    const config = getStartCountAndOffset(width);
    setConfig(config);
    moviesHelper.setShowShort(parameter);
    const arr = moviesHelper.getMovies(config.count);
    setEmpty(arr.length === 0);
    setMovies(arr);
    setNoMoreMovies(moviesHelper.isNoMoreMovies(config.count));
  }

  const handleClickMore = () => {
    setConfig((state) => {
      return {count: state.count + state.offset, offset: state.offset}
    })
  }

  const handleOnMovieClick = (movie) => {
    if (movie.isLiked) {
      movie.isLiked = undefined;
      deleteMovie(api.deleteMovie(movie._id), movie);
    } else {
      movie._id = undefined;
      likeMovie(api.saveMovie(movie), movie)
    }
  }

  const likeMovie = (promise, movie) => {
    promise.then((newCard) => {
      movie.isLiked = true;
      movie._id = newCard._id;
      moviesHelper.addMovie(movie);
      setMovies((state) => state.map((el) => el.movieId === movie.movieId ? movie : el));
    })
      .catch(() => setError(true));
  }

  const deleteMovie = (promise, movie) => {
    promise.then((deletedCard) => {
      movie.isLiked = undefined;
      moviesHelper.dislikeMovie(movie);
      setMovies((state) => state.map((el) => el._id === deletedCard._id ? movie : el));
    })
      .catch(() => setError(true))
  }


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
          parameter={moviesHelper.getSearchParam()}
          checkboxParameter={moviesHelper.getShowShort()}
          handleSearchShortMovies={handleSearchShortMovies}
        />
        {loading ? <Preloader/> :
          <MoviesCardList
            movies={movies}
            onMovieClick={handleOnMovieClick}
            onMoreClick={handleClickMore}
            noMoreFilms={noMoreMovies}
            isError={isError}
            isEmpty={isEmpty}
          />}
      </main>
    </>

  )
}

export default Movies;
