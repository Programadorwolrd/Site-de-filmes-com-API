import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

// abaixo a importação das imagens e videos utilizados
import videoPath from "../assets/trailer.mp4";
import terrorimgPath from "../assets/terror.png";
import suspenseimgPath from "../assets/suspense.png";
import biografiaimgPath from "../assets/biografia.png";



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
      <div className="organizadora">
        <h1 className="filme">Novissa voadora FilmesHD</h1>
        <p className="filme2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          iure assumenda laudantium sed <br />
          magnam blanditiis debitis quidem, perspiciatis nihil dolorum eos sunt
          a ex nobis{" "}
        </p>
        <a href=""></a><button className="buttonplay">Assistir</button>
        <button className="buttonfavorite">Favoritos</button>
      </div>
      <video className="video" width="100%" autoPlay muted loop>
        <source src={videoPath} type="video/mp4" />
      </video>
      

{/* aqui esta as categorias */}
<div className="categorias">
  {/* As categorias eu fiz assim, porem melhor fazer com uma logica simples que faça uma pesquisa sobre o tema no search para não quebrar em outros pcs */}
    <div className="category1"><img src={terrorimgPath} alt="imagem-filme-teror" /><a href="http://localhost:5173/search?q=Terror"></a> </div>
    <div className="category2"><img src={biografiaimgPath} alt="imagem-filme-biografia" /><a href="http://localhost:5173/search?q=a%C3%A7%C3%A3o"></a></div>
    <div className="category3"><img src={suspenseimgPath} alt="imagem-do-filme-suspense" /><a href="http://localhost:5173/search?q=Suspense"></a></div>
</div>

<h2 className="title">Filmes mais assistidos:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
