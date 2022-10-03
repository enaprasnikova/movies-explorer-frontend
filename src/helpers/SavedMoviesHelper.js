class SavedMoviesHelper {
  searchAllMovies(moviesList) {
    const shortedMovies = this._getShortedMovies(moviesList);
    localStorage.setItem('allSavedMovies', JSON.stringify(moviesList));
    localStorage.setItem('shortSavedMovies', JSON.stringify(shortedMovies));
  }

  getMovies(showShort, parameter) {
    const arr = showShort ? JSON.parse(localStorage.getItem('shortSavedMovies')) || []
      : JSON.parse(localStorage.getItem('allSavedMovies')) || [];
    return this._filterMovies(arr, parameter);
  }

  deleteMovie(movie) {
    const shortMovies = JSON.parse(localStorage.getItem('shortSavedMovies')) || [];
    const allSavedMovies = JSON.parse(localStorage.getItem('allSavedMovies')) || [];
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
    localStorage.removeItem('shortSavedMovies')
  }

  _filterMovies(arr, parameter) {
    return arr.filter((el) => parameter ?
      (el.nameRU.toLowerCase().includes(parameter.toLowerCase()) ||
        el.nameEN.toLowerCase().includes(parameter.toLowerCase())) : true)
  }

  _getShortedMovies(arr) {
    return arr.filter((el) => el.duration <= 40);
  }
}

export const savedMoviesHelper = new SavedMoviesHelper();