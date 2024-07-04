import React from "react";
import "./Poster.css";

function Poster({ movies }) {
  const movieName = "Inside Out 2";
  let imagePath, rating, overview;

  movies.map((movie) => {
    if (movie.original_title == movieName) {
      imagePath = `https://image.tmdb.org/t/p/original${
        movie && movie.backdrop_path
      }`;
      rating = (movie.vote_average * 10).toFixed(2);
      overview = movie.overview;
    }
  });

  return (
    <section className="moviePoster">
      <div className="posterImage">
        <img src={imagePath} className="img-fluid" />
        <div class="overlay"></div>
      </div>
      <div className="posterImage__overlay container-lg text-white">
        <div className="posterImage__title">
          <h1 className="display-4 fw-semibold">{movieName}</h1>
        </div>
        <div className="posterImage__rating">
          <span className="posterImage__fraction">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="IMDB logo"
              height="54"
              width="54"
            />
            <h6>{rating} / 100 </h6>
          </span>
          <span className="posterImage__percentage">
            <img src="/tomatoes.svg" />
            <h6>{rating}%</h6>
          </span>
        </div>
        <div className="posterImage__description">
          <p className="decription">{overview}</p>
        </div>
        <div className="posterImage__watch-btn">
          <button className="btn btn-danger">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                fill="white"
              />
            </svg>

            <span>Watch Trailer</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Poster;
