import React from 'react';
import Promo from '../Promo/Promo';
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main({ width, isOpen, onClick, onClose, loggedIn }) {

  return (
    <>
      <Header
        name={"main"}
        onClick={onClick}
        isOpen={isOpen}
        onClose={onClose}
        width={width}
        loggedIn={loggedIn}
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
