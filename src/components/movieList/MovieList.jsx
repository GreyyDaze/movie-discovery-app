import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
import "./MovieList.css";

function MovieList({ movies }) {
  const [count, setCount] = useState(0);

  return (
    <section className="movieList container mt-5 img-fluid">
      <div className="list__title d-flex justify-content-between">
        <h2 className="fs-3 fw-bold">Featured Movie</h2>
        <a href="/" className="text-danger fs-5 text-decoration-none">
          See more <span className="ms-2">&gt;</span>
        </a>
      </div>
      <div className="list__cards grid-container">
        {movies.slice(1, 11).map((movie, index) => (
          <MovieCard movie={movie} key={index}/>
        ))}
      </div>
    </section>
  );
}

export default MovieList;
