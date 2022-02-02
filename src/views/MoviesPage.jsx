import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovie } from '../Servises/FetchApi';
import MoviesList from '../Components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [value, setValue] = useState('');
  const [arrayOfFilms, setArrayOfFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    query &&
      fetchMovie(query)
        .then(data => {
          console.log(data);
          setArrayOfFilms(data.results);
        })
        .catch(error => console.log('error :>> ', error));
  }, [query]);

  const onHandleChange = e => {
    setValue(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: value });
    setValue('');
  };
  console.log(query);

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <input type="text" onChange={onHandleChange} value={value} />
        <button type="submit">Search</button>
      </form>
      {arrayOfFilms && <MoviesList arrayOfFilms={arrayOfFilms} />}
    </>
  );
};

export default MoviesPage;
