/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo, useRef, useState } from "react";
import { MovieCard } from "./MovieCard";
import movies from "../config/data.json";
import { SearchBar } from "./SearchBar";
import { debounce } from "lodash";
import { MovieDetails } from "./MovieDetails";

export const Dashboard = (props) => {
  const { setMobileOpen } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const gridRef = useRef();

  const allMovies = movies;

  const handleSearchQueryChange = (searchQ) => {
    setSearchQuery(searchQ);
  };

  const handleClearSearchQuery = () => {
    setSearchQuery("");
    setSearchResults(null);
  };

  const searchMovies = useCallback(
    debounce((searchQuery) => {
      if (searchQuery && searchQuery.length) {
        console.log("searching for ", searchQuery);
        const results = allMovies.filter((movie) =>
          movie.Title.toLocaleLowerCase().includes(searchQuery)
        );
        if (results.length) setSearchResults(results);
        else {
          setSearchResults(null);
          setSelectedMovie(null);
        }
      }
    }, 500),
    []
  );

  const getRowNumber = (index) => {
    const columnsPerRow = Math.floor((gridRef.current.offsetWidth - 80) / 178);
    const rowIndex = Math.floor(index / columnsPerRow) + 1;
    return rowIndex;
  };

  const handleMovieSelection = (movie, index) => {
    if (selectedMovie?.details.imdbID === movie.imdbID) setSelectedMovie(null);
    else
      setSelectedMovie({
        details: movie,
        movieIndex: index,
        row: getRowNumber(index),
      });
  };

  const allMovieCards = allMovies.map((movie, index) => (
    <MovieCard
      movie={movie}
      key={movie.imdbID}
      handleMovieSelection={handleMovieSelection}
      index={index}
      isSelected={selectedMovie?.details.imdbID === movie.imdbID}
    />
  ));

  const searchedMovies = useMemo(() => {
    return searchResults && searchResults.length ? (
      searchResults.map((movie, index) => (
        <MovieCard
          movie={movie}
          key={movie.imdbID}
          handleMovieSelection={handleMovieSelection}
          index={index}
          isSelected={selectedMovie?.details.imdbID === movie.imdbID}
        />
      ))
    ) : (
      <div className="no-results">No results found for your search</div>
    );
  }, [searchResults]);

  return (
    <>
      <div className="dashboard">
        <SearchBar
          searchQuery={searchQuery}
          handleSearchQueryChange={handleSearchQueryChange}
          handleClearSearchQuery={handleClearSearchQuery}
          searchMovies={searchMovies}
          setMobileOpen={setMobileOpen}
        />
        <div className="movies-grid" ref={gridRef}>
          {searchQuery ? searchedMovies : allMovieCards}
          {selectedMovie ? (
            <MovieDetails
              row={selectedMovie.row}
              movie={selectedMovie.details}
              className={selectedMovie ? "details-visible" : "details-hidden"}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
