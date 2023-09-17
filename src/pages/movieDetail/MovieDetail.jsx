import React, { useState, useEffect } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Error from "../../components/Error/Error";

function MovieDetail() {
  const [currentMovie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const api_url = `https://api.themoviedb.org/3/movie/${id}?api_key=3f69319b6f1127438080fb82fd95c795`;

  const getDetails = async () => {
    const res = await fetch(api_url);
    const data = await res.json();
    setMovie(data);
    console.log(data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const posterPath = `https://image.tmdb.org/t/p/original${
    currentMovie && currentMovie.poster_path
  }`;
  const movieTitle = currentMovie && currentMovie.original_title;
  const runtime = currentMovie && currentMovie.runtime;
  const runtime__hour = Math.floor(runtime / 60);
  const runtime__minutes = runtime % 60;
  const rating = currentMovie && currentMovie.vote_average;
  const genres = currentMovie && currentMovie.genres;
  const overview = currentMovie && currentMovie.overview;
  const release_date = currentMovie && currentMovie.release_date;
  const popularity = currentMovie && currentMovie.popularity;
  const companies = currentMovie && currentMovie.production_companies;
  const countries = currentMovie && currentMovie.production_countries;
  const languages = currentMovie && currentMovie.spoken_languages;
  const error = currentMovie && currentMovie.status_message;
//   console.log(error, "error");
  let names = [],
    companies_names = [],
    countries_names = [],
    lang = [];

  if (Array.isArray(genres) && genres.length > 0) {
    genres.forEach((genre) => {
      names.push(genre.name);
    });
    console.log(names);
  } else {
    console.log("No genres available or invalid data.");
  }

  if (Array.isArray(companies) && companies.length > 0) {
    companies.forEach((company) => {
      companies_names.push(company.name);
    });
    console.log(companies_names);
  }

  if (Array.isArray(countries) && countries.length > 0) {
    countries.forEach((country) => {
      countries_names.push(country.name);
    });
    console.log(countries_names);
  }

  if (Array.isArray(languages) && languages.length > 0) {
    languages.forEach((lang) => {
      companies_names.push(lang.name);
    });
    console.log(lang);
  }

  return (
    <>
      {isLoading ? (
        <div className="loaders">
          <Oval
            height={100}
            width={100}
            color="blue"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="red"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : error ? (
        <Error error={error} />
      ) : (
        <section className="movieDetail mx-5 mt-4" id="main">
          <div className="movieDetail__img mx-auto my-auto">
            <img
              src={posterPath}
              alt="movie poster"
              className="img-fluid moviePoster"
            />
          </div>
          <div className="movieDetail__text">
            <div className="detail__intro d-flex align-items-center justify-content-between">
              <div className="left-side">
                <span className="fs-4 fw-bold me-3" data-testid="movie-title">
                  {movieTitle}
                </span>
                <span
                  className="fs-5 text-secondary d-block d-lg-none"
                  data-testid="movie-runtime"
                >
                  {runtime__hour}h {runtime__minutes}m
                </span>
              </div>
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="yellow"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <p className=" fs-5 mx-2 my-0">{rating}</p>
              </div>
            </div>
            <div className="detail__overview mt-2">
              {names.map((name, index) => (
                <span key={index} className="me-2 badge bg-danger">
                  {name}
                </span>
              ))}
              <p className="mt-3 text-secondary" data-testid="movie-overview">
                {overview}
              </p>
            </div>
            <div className="detail__end">
              <div className="date mb-2">
                <h5 className="text-danger">Release Date:</h5>
                <h6 data-testid="movie-release-date">{release_date}</h6>
              </div>
              <div className="popularity mb-2">
                <h5 className="text-danger">Popularity:</h5>
                <h6>{popularity}</h6>
              </div>
              <div className="companies mb-2">
                <h5 className="text-danger">Production Companies</h5>
                {companies_names.map((name, index) => (
                  <h6 key={index} className="me-2 badge bg-danger">
                    {name}
                  </h6>
                ))}
              </div>
              <div className="countries mb-2">
                <h5 className="text-danger">Production Countries</h5>
                {countries_names.map((name, index) => (
                  <h6 key={index} className="me-2 badge bg-danger">
                    {name}
                  </h6>
                ))}
              </div>
              <div className="languages">
                <h5 className="text-danger">Spoken Languages</h5>
                {lang.map((name, index) => (
                  <h6 key={index} className="me-2 badge bg-danger">
                    {name}
                  </h6>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default MovieDetail;
