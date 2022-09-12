import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';


function MoviesCard({movie}) {

  const location = useLocation();

  const moviesCardSelected = (
    `button-save ${location.pathname === '/saved-movies' ? 'button-delete' : ''}`
  )

  return (
     <div className="movie-card">
       <div className="movie-attributes">
         <div className="movie-info">
           <h1 className="movie-info__name">{movie.name}</h1>
           <p className="movie-info__duration">{movie.duration}</p>
         </div>
         <button type="button" className={moviesCardSelected}></button>
       </div>
       <img src={movie.link} className="movie-card__photo" alt={movie.name}/>
     </div>
  )
}

export default MoviesCard;
