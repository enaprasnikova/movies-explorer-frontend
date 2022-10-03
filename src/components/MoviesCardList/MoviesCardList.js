import React, {useEffect, useState} from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import {ERROR_WHILE_FETCH_MOVIES, MOVIES_NOT_FOUND} from "../../utils/constants";

function MoviesCardList({ movies, onMovieClick, onMoreClick, noMoreFilms, isError, isEmpty }) {

  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    setMoviesList(movies ? movies.map((movie) =>
      <MoviesCard
        movie={movie}
        key={movie.movieId}
        onMovieClick={onMovieClick}
      />
    ) : [])
  }, [movies])

  return (
    <section className="cards">
      { isError ? <h1 className="cards__error">{ERROR_WHILE_FETCH_MOVIES}</h1> :
        isEmpty ? <h1 className="cards__not-found">{MOVIES_NOT_FOUND}</h1> :
        <div className="card-list">
        {moviesList}
      </div>}
      {!noMoreFilms && <div className="cards__more-container">
        <button type="text" className="cards__more" onClick={() => onMoreClick()}>Ещё</button>
      </div>}

    </section>
  )
}

export default MoviesCardList;
