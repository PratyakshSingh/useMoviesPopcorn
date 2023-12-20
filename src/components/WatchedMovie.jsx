import React from "react";

const WatchedMovie = ({ movie, deleteHandler }) => {
  return (
    <li>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
      <div className="btn-delete" onClick={() => deleteHandler(movie.imdbID)} />
    </li>
  );
};

export default WatchedMovie;
