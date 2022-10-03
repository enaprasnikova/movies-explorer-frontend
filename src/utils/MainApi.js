const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || 'http://localhost:3001'}`;

class MainApi {
  constructor(options) {
    this._options = options;
  }

  _makeRequest(url, options = {}) {
    return fetch(url, options)
      .then((res) => res.ok ? res.json() : Promise.reject(res.json())
      )
  }

  editProfile(name, email) {
    this._options.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return this._makeRequest(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._options.headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
  }

  getUserInfo() {
    this._options.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return this._makeRequest(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
      credentials: 'include',
    })
  }

  getSavedMovies() {
    this._options.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return this._makeRequest(`${this._options.baseUrl}/movies`, {
      headers: this._options.headers,
      credentials: 'include',
    })
  }

  saveMovie(movie) {
    this._options.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return this._makeRequest(`${this._options.baseUrl}/movies`, {
      method: 'POST',
      headers: this._options.headers,
      credentials: 'include',
      body: JSON.stringify(movie)
    })
  }

  deleteMovie(id) {
    this._options.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return this._makeRequest(`${this._options.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._options.headers,
      credentials: 'include'
    })
  }

}

export const api = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});