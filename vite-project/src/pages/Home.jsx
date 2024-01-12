import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";
import videoPath from "../assets/trailer.mp4";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

  return (
    <div className="container">
      <div>
        <h1 className="filme" >Novissa voadora Filmes Livre</h1>
        <p className="filme2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure assumenda laudantium sed <br />magnam blanditiis debitis quidem, perspiciatis nihil dolorum eos sunt a ex nobis </p>

      <button className="buttonplay">Assistir</button>
        <button className="buttonfavorite">Favoritos</button>
        <video width="100%" autoPlay muted loop>
          
          <source src={videoPath} type="video/mp4" />
          
        </video>
        
      </div>
     

      <h2 className="title">Principais filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
