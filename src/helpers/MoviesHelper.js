import {BASE_URL_BEATFILM} from "../utils/MoviesApi";
import {savedMoviesHelper} from "./SavedMoviesHelper";
const urlPattern = /http[s]?:\/\/[w{3}]?[a-zA-Z0-9-]+\.[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+#?/;

class MoviesHelper {

  searchMovies(moviesList, searchParam) {
    const filteredMovies = this._filterMovies(moviesList, searchParam)
      .map((el) => this._getPrettyView(el));
    const shortedMovies = this._getShortedMovies(filteredMovies);

    localStorage.setItem('movies', JSON.stringify(filteredMovies));
    localStorage.setItem('shortMovies', JSON.stringify(shortedMovies));
    localStorage.setItem('moviesSearchParam', searchParam);
  }

  getMovies(count) {
    const showShort = JSON.parse(localStorage.getItem('showShortMovies'));
    const arr = !showShort ? JSON.parse(localStorage.getItem('movies')) || []
      : JSON.parse(localStorage.getItem('shortMovies')) || [];
    return arr.slice(0, count);
  }

  getSearchParam() {
    return localStorage.getItem('moviesSearchParam') || '';
  }

  setShowShort(parameter) {
    localStorage.setItem('showShortMovies', parameter);
  }

  getShowShort() {
    return JSON.parse(localStorage.getItem('showShortMovies')) || false;
  }

  isNoMoreMovies(count) {
    const showShort = JSON.parse(localStorage.getItem('showShortMovies'));
    const arr = !showShort ? JSON.parse(localStorage.getItem('movies')) || []
      : JSON.parse(localStorage.getItem('shortMovies')) || [];
    return arr.length <= count;
  }

  addMovie(newCard) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies = movies.map((el) => {
      if (el.movieId === newCard.movieId) {
        return newCard;
      }
      return el;
    })
    localStorage.setItem('movies', JSON.stringify(movies));

    if (newCard.duration <= 40) {
      let shortMovies = JSON.parse(localStorage.getItem('shortMovies')) || [];
      shortMovies = shortMovies.map((el) => {
        if (el.movieId === newCard.movieId) {
          return newCard;
        }
        return el;
      })
      localStorage.setItem('shortMovies', JSON.stringify(shortMovies));
    }
  }

  dislikeMovie(movie) {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const shortMovies = JSON.parse(localStorage.getItem('shortMovies')) || [];
    localStorage.setItem('movies', JSON.stringify(movies.map((el) => {
      if (el.movieId === movie.movieId) {
        el.isLiked = undefined;
      }
      return el;
    })));
    localStorage.setItem('shortMovies', JSON.stringify(shortMovies.map((el) => {
      if (el.movieId === movie.movieId) {
        el.isLiked = undefined;
      }
      return el;
    })));
  }

  clear() {
    localStorage.removeItem('movies')
    localStorage.removeItem('shortMovies')
    localStorage.removeItem('moviesSearchParam')
    localStorage.removeItem('showShortMovies')
  }


  _filterMovies(arr, parameter) {
    return arr.filter((el) => (el.nameRU.includes(parameter) || el.nameEN.includes(parameter))
      && urlPattern.test(el.trailerLink))
  }

  _getShortedMovies(arr) {
    return arr.filter((el) => el.duration <= 40);
  }

  _getPrettyView(el) {
    const obj = {
      movieId: el.id,
      image: BASE_URL_BEATFILM + el.image.url,
      thumbnail: BASE_URL_BEATFILM + el.image.formats.thumbnail.url,
      country: el.country,
      director: el.director,
      duration: el.duration,
      year: el.year,
      description: el.description,
      trailerLink: el.trailerLink,
      nameRU: el.nameRU,
      nameEN: el.nameEN
    }
    savedMoviesHelper.setIsLiked(obj);
    return obj;
  }
}

export const moviesHelper = new MoviesHelper();
