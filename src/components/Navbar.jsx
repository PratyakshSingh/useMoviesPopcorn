import React from "react";

const Navbar = ({ search, setSearch, movies }) => {
  const searchHandler = (e) => {
    setSearch(() => e.target.value);
  };

  return (
    <div className="nav-bar">
      <div className="logo">
        <h1>useMoviesPopcorn</h1>
      </div>
      <input
        className="search"
        value={search}
        onChange={searchHandler}
        type="text"
        placeholder="Search Movies..."
      />
      <div>
        <h3>Found {movies.length} results</h3>
      </div>
    </div>
  );
};

export default Navbar;
