import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleResize() {
    setWindowWidth(window.outerWidth);
  }

  window.addEventListener('resize', handleResize);

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(true)
  }

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false)
  }

  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route path="/movies">
          <Movies
            onClick={handleBurgerMenuClick}
            isOpen={isBurgerMenuOpen}
            onClose={closeBurgerMenu}
            width={windowWidth}
          />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies
            onClick={handleBurgerMenuClick}
            isOpen={isBurgerMenuOpen}
            onClose={closeBurgerMenu}
            width={windowWidth}
          />
        </Route>

        <Route path="/profile">
          <Profile
            onClick={handleBurgerMenuClick}
            isOpen={isBurgerMenuOpen}
            onClose={closeBurgerMenu}
            width={windowWidth}
          />
        </Route>

        <Route path="/signin">
          <Login/>
        </Route>

        <Route path="/signup">
          <Register/>
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
