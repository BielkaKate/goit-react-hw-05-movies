import { useEffect, useState } from 'react';
import { FetchFilmsCredits } from '../../Servises/FetchApi';
import { CastList } from './Cast.styled';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    FetchFilmsCredits(movieId)
      .then(data => setCast(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <CastList>
      {cast.map(el => (
        <li key={el.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
            alt={el.name}
            height="150"
          />
          <p>{el.name}</p>
        </li>
      ))}
    </CastList>
  );
}
