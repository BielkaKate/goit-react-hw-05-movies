import { Link, useLocation } from 'react-router-dom';
import { FilmGallery } from './MoviesList.styled';

const MoviesList = ({ arrayOfFilms }) => {
  const location = useLocation();
  return (
    <FilmGallery>
      {arrayOfFilms.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <p>{film.original_title}</p>
            <img
              width="200"
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.original_title}
            />
          </Link>
        </li>
      ))}
    </FilmGallery>
  );
};

export default MoviesList;
