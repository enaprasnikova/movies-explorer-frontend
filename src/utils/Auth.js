const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || 'http://localhost:3001'}`;

export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email, name})
  })
    .then((res) => res.ok ? res.json() : Promise.reject(res.json()))
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then((res => res.ok ? res.json() : Promise.reject(res.json())))
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => res.json())
    .then(data => data)
}

