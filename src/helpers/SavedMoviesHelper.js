class SavedMoviesHelper {
  searchMovies(moviesList, searchParam) {
    const filteredMovies = this._filterMovies(moviesList, searchParam);
    const shortedMovies = this._getShortedMovies(filteredMovies);

    localStorage.setItem('allSavedMovies', JSON.stringify(moviesList));
    localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));
    localStorage.setItem('shortSavedMovies', JSON.stringify(shortedMovies));
    localStorage.setItem('savedMoviesSearchParam', searchParam || '');
  }

  getMovies() {
    const showShort = JSON.parse(localStorage.getItem('showShortSavedMovies'));
    return !showShort ? JSON.parse(localStorage.getItem('savedMovies')) || []
      : JSON.parse(localStorage.getItem('shortSavedMovies')) || [];
  }

  getSearchParam() {
    return localStorage.getItem('savedMoviesSearchParam') || '';
  }

  setShowShort(parameter) {
    localStorage.setItem('showShortSavedMovies', parameter);
  }

  getShowShort() {
    return JSON.parse(localStorage.getItem('showShortSavedMovies')) || false;
  }

  deleteMovie(movie) {
    const movies = JSON.parse(localStorage.getItem('savedMovies')) || [];
    const shortMovies = JSON.parse(localStorage.getItem('shortSavedMovies')) || [];
    const allSavedMovies = JSON.parse(localStorage.getItem('allSavedMovies')) || [];
    localStorage.setItem('savedMovies', JSON.stringify(movies.filter((el) => el._id !== movie._id)));
    localStorage.setItem('shortSavedMovies', JSON.stringify(shortMovies.filter((el) => el._id !== movie._id)));
    localStorage.setItem('allSavedMovies', JSON.stringify(allSavedMovies.filter((el) => el._id !== movie._id)));
  }

  setIsLiked(movie) {
    const arr = JSON.parse(localStorage.getItem('allSavedMovies')) || [];
    const likedEl = arr.find((el) => el.movieId === movie.movieId);
    if (likedEl) {
      movie._id = likedEl._id;
      movie.isLiked = true;
    }
  }

  clear() {
    localStorage.removeItem('allSavedMovies')
    localStorage.removeItem('savedMovies')
    localStorage.removeItem('shortSavedMovies')
    localStorage.removeItem('savedMoviesSearchParam')
    localStorage.removeItem('showShortSavedMovies')
  }

  _filterMovies(arr, parameter) {
    return arr.filter((el) => parameter ? (el.nameRU.includes(parameter) || el.nameEN.includes(parameter)) : true)
  }

  _getShortedMovies(arr) {
    return arr.filter((el) => el.duration <= 40);
  }
}

export const savedMoviesHelper = new SavedMoviesHelper();