import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function MovieCard({ movie }) {
  const [isLoading, setIsLoading] = useState(true);

  const id = movie.id;
  const posterPath = `https://image.tmdb.org/t/p/original${movie && movie.poster_path}`;
  const title = movie && movie.original_title;
  const releaseDate = movie && movie.release_date;
  const rating = (movie && movie.vote_average) *10;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

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
      ) : (
        <section className="movieCards container mt-5">
          <Link to={`/movies/${id}`} className="card-link text-decoration-none">
            <Card className="movieCard" data-testid="movie-card">
              <Card.Img
                variant="top"
                src={posterPath}
                className="img-fluid overflow-hidden posterImg"
                data-testid= "movie-poster"
              />
              <Card.Body className="movieCard__body">
                <Card.Title className="fw-bold lh-base" data-testid="movie-title">{title}</Card.Title>
                <div className="mt-3">
                  <div className="movieCard__date mb-2">
                    <span className="text-secondary" data-testid="movie-release-date">{releaseDate}</span>
                  </div>
                  <div className="movieCard__rating d-flex justify-content-between">
                    <div className="movieCard__fraction">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                        height="45"
                        width="45"
                        alt="IMDB"
                        className="img-fluid me-3"
                      />
                      <span className="fw-bold">{rating}.0 / 100</span>
                    </div>
                    <div className="movieCard__percentage">
                      <img src="/src/assets/tomatoe.svg" alt="Tomato" className="me-3" />
                      <span className="fw-bold">{rating}%</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Link>
        </section>
      )}
    </>
  );
}

export default MovieCard;
