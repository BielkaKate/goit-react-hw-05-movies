import { useEffect, useState } from 'react';
import { fetchTrending } from '../Servises/FetchApi';
import MoviesList from '../Components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  console.log('results');

  useEffect(() => {
    fetchTrending()
      .then(({ results }) => {
        setMovies(results);
        console.log(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {movies && <MoviesList arrayOfFilms={movies} />}
    </div>
  );
}

// export default HomePage;
