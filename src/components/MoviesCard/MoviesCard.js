import React from 'react';
import {useLocation} from 'react-router-dom';


function MoviesCard({movie, onMovieClick}) {

  const location = useLocation();

  const moviesCardSelected = (
    `button-save ${location.pathname === '/saved-movies' ? 'button-delete' : movie.isLiked ? 'button-save_active' : ''}`
  )

  function getDuration(minutes) {
    const hours = Math.trunc(minutes/60);
    const min = minutes%60;
    return `${hours}ч ${min}м`
  }

  const handleMovieClick = () => {
    onMovieClick(movie);
  }

  const handleImageClick = () => {
    window.open(movie.trailerLink, '_blank', 'noopener,noreferrer');
  }

  return (
     <div className="movie-card">
       <div className="movie-attributes">
         <div className="movie-info">
           <h1 className="movie-info__name">{movie.nameRU}</h1>
           <p className="movie-info__duration">{getDuration(movie.duration)}</p>
         </div>
         <button type="button" className={moviesCardSelected} onClick={handleMovieClick}></button>
       </div>
       <img src={movie.image} className="movie-card__photo" alt={movie.name} onClick={handleImageClick}/>
     </div>
  )
}

export default MoviesCard;
