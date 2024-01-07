import react from "react-router-dom";
import { faStar } from "react-icons/fa";

const imageUrl = import.meta.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={MovieCard.title} />
      <h2>{Movie.title}</h2>
      <p>
        <Fastar /> {movie.vote_average}
      </p>

    {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
