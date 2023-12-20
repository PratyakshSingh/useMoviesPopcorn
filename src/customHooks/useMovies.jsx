import { useEffect, useState } from "react";
import { apiKey } from "../config";

export default function useMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    async function searchMovies() {
      try {
        if (query.length < 3) return;
        setError(false);
        setisLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
          { signal }
        );

        if (!res.ok) {
          throw new Error("Something went Wrong while fetching movies");
        }
        const data = await res.json();

        setisLoading(false);
        if (data.Response === "True") {
          setError(false);
          setMovies(data.Search);
        } else if (data.Response === "False") {
          setMovies([]);
          setError(true);
        }
      } catch (err) {
        setisLoading(false);
        setError(err.message);
      }
    }
    searchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return [query, movies, error, isLoading, setQuery];
}
