export const BASE_URL_BEATFILM = 'https://api.nomoreparties.co';

class MoviesApi {
  constructor(options) {
    this._options = options;
  }

  _makeRequest(url, options = {}) {
    return fetch(url, options)
      .then((res) => res.ok ? res.json() : Promise.reject(res)
      )
  }

  getInitialMovies() {
    return this._makeRequest(`${this._options.baseUrl}/beatfilm-movies`, {
      headers: this._options.headers
    })
  }

}

export const movieApi = new MoviesApi({
  baseUrl: BASE_URL_BEATFILM,
  headers: {
    'Content-Type': 'application/json'
  }
});