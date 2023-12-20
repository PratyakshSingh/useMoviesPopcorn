import Movie from "./Movie";

const MoviesList = ({ movies, onSelect }) => {
  // console.log(apiKey);

  return (
    <div className="list">
      <ul className="list-movies">
        {movies?.map((movie) => {
          return (
            <Movie key={movie.imdbID} movie={movie} onClickHandler={onSelect} />
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
