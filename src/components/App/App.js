import React, {useEffect, useState} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import {authorize, getContent, register} from "../../utils/Auth";
import {api} from "../../utils/MainApi";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {moviesHelper} from "../../helpers/MoviesHelper";
import {savedMoviesHelper} from "../../helpers/SavedMoviesHelper";
import {SUCCESS_UPDATE} from "../../utils/constants";

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentUser, setCurrentUser] = useState({});
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loggedIn) {
      api.getUserInfo()
        .then(res => {
          setCurrentUser(res)
        })
        .catch(error => console.log(error))
    }
  }, [loggedIn])

  const history = useHistory()

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  window.addEventListener('resize', handleResize);

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(true)
  }

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false)
  }

  function handleRegister(password, email, name, setIsError, formParams, setResponse) {
    register(password, email, name)
      .then((data) => {
        if (data) {
          handleAuthorize(formParams, setResponse, setIsError)
        } else {
          setIsError(true);
        }
      })
      .catch((err) => {
        err.then(res => {
          setResponse(res.message)
          setIsError(true);
        });
      });
  }

  function handleAuthorize(formParams, setResponse, setIsError) {
    authorize(formParams.email, formParams.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          tokenCheck(() => history.push("/movies"))
        } else {
          setIsError(true);
        }
      })
      .catch(err => {
        err.then(res => {
          setResponse(res.message)
          setIsError(true);
        })
      }); // запускается, если пользователь не найден
  }

  function tokenCheck(callback) {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      getContent(jwt).then((res) => {
        if (res) {
          setLoggedIn(true)
          setLoading(false)
          if (callback) {
            callback();
          }
        }
      });
    } else {
      setLoading(false)
    }
  }

  const signOut = () => {
    localStorage.removeItem('token');
    moviesHelper.clear();
    savedMoviesHelper.clear();
    setLoggedIn(false);
    history.push('/');
  }

  const handleUpdateUser = (name, email, setResponse, setError) => {
    api.editProfile(name, email)
      .then(res => {
        setCurrentUser(res)
        setResponse(SUCCESS_UPDATE)
      })
      .catch(error => {
        error.then(res => {
          setError(res.message)
        })
      })
  }

  useEffect(() => {
    tokenCheck();
  }, [])

  if (loading) {
    return null;
  }

  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Main
            onClick={handleBurgerMenuClick}
            isOpen={isBurgerMenuOpen}
            onClose={closeBurgerMenu}
            width={windowWidth}
            loggedIn={loggedIn}
          />
        </Route>

        <ProtectedRoute exact path="/movies" loggedIn={loggedIn}>
          <CurrentUserContext.Provider value={currentUser}>
            <Movies
              onClick={handleBurgerMenuClick}
              isOpen={isBurgerMenuOpen}
              onClose={closeBurgerMenu}
              width={windowWidth}
              loggedIn={loggedIn}
            />
          </CurrentUserContext.Provider>
        </ProtectedRoute>

        <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn}>
          <CurrentUserContext.Provider value={currentUser}>
            <SavedMovies
              onClick={handleBurgerMenuClick}
              isOpen={isBurgerMenuOpen}
              onClose={closeBurgerMenu}
              width={windowWidth}
              loggedIn={loggedIn}
            />
          </CurrentUserContext.Provider>
        </ProtectedRoute>

        <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
          <CurrentUserContext.Provider value={currentUser}>
            <Profile
              onClick={handleBurgerMenuClick}
              isOpen={isBurgerMenuOpen}
              onClose={closeBurgerMenu}
              width={windowWidth}
              signOut={signOut}
              handleUpdateUser={handleUpdateUser}
              loggedIn={loggedIn}
            />
          </CurrentUserContext.Provider>

        </ProtectedRoute>

        <Route exact path="/signin">
          <Login
            handleAuthorize={handleAuthorize}
          />
        </Route>

        <Route exact path="/signup">
          <Register
            handleRegister={handleRegister}
          />
        </Route>

        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>

      <Footer/>

    </div>

  );
}

export default App;
