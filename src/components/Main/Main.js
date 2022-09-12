import React from 'react';
import Promo from '../Promo/Promo';
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import { Link } from 'react-router-dom';

function Main() {

  return (
    <>
      <Header
        name={"main"}
        children={
          <div className="header-main">
            <Link to="/signup" className="header-main__signup">Регистрация</Link>
            <Link to="/signin" className="header-main__signin">Войти</Link>
          </div>
        }
      />
      <main className="page">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
    </>

  )
}

export default Main;
