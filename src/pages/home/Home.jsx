import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Poster from "../../components/hero/Poster";
import MovieList from "../../components/movieList/MovieList";
import Footer from "../../components/footer/Footer";

function Home() {
  const api_url =
    "https://api.themoviedb.org/3/discover/movie?api_key=3f69319b6f1127438080fb82fd95c795";
  const [moviesList, setMoviesList] = useState([]);
  

  const getMovies = async () => {
    const res = await fetch(api_url);
    const data = await res.json();
    setMoviesList(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  

  return (
    <>
      <Header />
      <Poster
        movies={moviesList}
      />
      <MovieList movies={moviesList}>
      </MovieList> 
      <Footer />
    </>
  );
}

export default Home;
