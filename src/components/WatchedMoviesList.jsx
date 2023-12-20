import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedMoviesList = ({ watchedList, deleteHandler }) => {
  return (
    <div className="list">
      <ul className="list-movies">
        {watchedList?.map((movie) => {
          return (
            <WatchedMovie
              key={movie.imdbID}
              movie={movie}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default WatchedMoviesList;
