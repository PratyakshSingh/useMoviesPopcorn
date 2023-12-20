import { useState, useEffect } from "react";
import { apiKey } from "../config";
import Loader from "./Loader";

const SelectedMovie = ({
  movieDetails,
  isLoading,
  backHandler,
  addToWatchedList,
}) => {
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="details">
          <header>
            <div className="btn-back" onClick={backHandler}>
              &#60;
            </div>
            <img src={movieDetails.Poster} alt={movieDetails.imdbID} />
            <div className="details-overview">
              <h2>{movieDetails.Title}</h2>
              <p>
                {movieDetails.Released} | {movieDetails.Runtime}
              </p>
              <p>{movieDetails.Genre}</p>
              <p>
                <span>&#10024; {movieDetails.imdbRating} IMDb Rating</span>
              </p>
            </div>
          </header>
          <section>
            <button className="btn-add" onClick={() => addToWatchedList()}>
              Add to Watch List
            </button>
            <p>{movieDetails.Plot}</p>
            <p>Starring: {movieDetails.Actors}</p>
            <p>Directed By: {movieDetails.Director}</p>
          </section>
        </div>
      )}
    </>
  );
};

export default SelectedMovie;
