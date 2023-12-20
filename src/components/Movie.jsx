import React from "react";

const Movie = ({ movie, onClickHandler }) => {
  return (
    <li onClick={() => onClickHandler(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </li>
  );
};

export default Movie;
