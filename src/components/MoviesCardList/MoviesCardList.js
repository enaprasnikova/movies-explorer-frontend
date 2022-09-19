import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import initialCards from "../../utils/constants";

function MoviesCardList() {

  const moviesList = initialCards.map((movie) =>
    <MoviesCard
      movie={movie}
      key={movie.id}
    />
  )

  return (
    <section className="cards">
      <div className="card-list">
        {moviesList}
      </div>
      <div className="cards__more-container">
        <button type="text" className="cards__more">Ещё</button>
      </div>

    </section>
  )
}

export default MoviesCardList;
