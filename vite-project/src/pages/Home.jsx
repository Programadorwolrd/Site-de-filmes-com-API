import { useState, useEfefect, useEffect } from "react";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    //aqui criei uma variavel chamada  getTopRatedMovies que pega o json
    const data = await res.json();
    setTopMovies(data.results); //mostra o data com o json
  };



  useEffect(() => {
    const topRatedUrl =`${moviesURL}top_rated?${apiKey}`;
  }, []);//aqui uso uma função do react chamda useEffect com outras coisas pra fazer a libveração da api com o link e a senha


  return <div>HOME</div>;
};

export default Home;
