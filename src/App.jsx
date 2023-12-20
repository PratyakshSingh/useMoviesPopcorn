import "./App.css";
import Navbar from "./components/Navbar.jsx";
import MoviesList from "./components/MoviesList.jsx";
import WatchedMoviesList from "./components/WatchedMoviesList.jsx";
import Box from "./components/Box.jsx";
import Loader from "./components/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import WatchedSummary from "./components/WatchedSummary.jsx";
import SelectedMovie from "./components/SelectedMovie.jsx";
import useMovies from "./customHooks/useMovies.jsx";
import useLocalStorage from "./customHooks/useLocalStorage.jsx";
import useMovieDetails from "./customHooks/useMovieDetails.jsx";

function App() {
  const [query, movies, error, isLoading, setQuery] = useMovies();
  const [watchedList, setWatchedList] = useLocalStorage();
  const [movieDetails, isLoadingMovie, selectedMovie, setSelectedMovie] =
    useMovieDetails();

  const selectedMovieHandler = (imdbId) => {
    setSelectedMovie(imdbId);
  };

  const backHandler = () => {
    setSelectedMovie(null);
  };

  const addToWatchedList = () => {
    // const movie = movies.find((mov) => mov.imdbID === id);
    if (watchedList.includes(movieDetails)) {
      return;
    }

    setWatchedList([...watchedList, movieDetails]);
  };

  const deleteHandler = (id) => {
    const newWatchedList = watchedList.filter((mov) => mov.imdbID !== id);
    setWatchedList([...newWatchedList]);
  };

  return (
    <div className="containerDiv">
      <Navbar search={query} setSearch={setQuery} movies={movies} />
      <div className="main">
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList movies={movies} onSelect={selectedMovieHandler} />
          )}
          {error && <ErrorMessage />}
        </Box>
        <Box>
          {selectedMovie ? (
            <SelectedMovie
              isLoading={isLoadingMovie}
              movieDetails={movieDetails}
              backHandler={backHandler}
              addToWatchedList={addToWatchedList}
            />
          ) : (
            <>
              <WatchedSummary watchedList={watchedList} />
              <WatchedMoviesList
                watchedList={watchedList}
                deleteHandler={deleteHandler}
              />
            </>
          )}
        </Box>
      </div>
    </div>
  );
}

export default App;
