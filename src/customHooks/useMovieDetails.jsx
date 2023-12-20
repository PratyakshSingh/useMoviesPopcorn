import { useEffect, useState } from "react";
import { apiKey } from "../config";

export default function useMovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoadingMovie, setisLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function movieDetails() {
      setisLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedMovie}`
      );
      const data = await res.json();
      setMovieDetails(data);
      setisLoading(false);
    }
    movieDetails();
  }, [selectedMovie]);

  return [movieDetails, isLoadingMovie, selectedMovie, setSelectedMovie];
}
