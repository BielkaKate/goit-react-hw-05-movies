import { lazy } from 'react';
import { fetchById } from '../../Servises/FetchApi';
import {
  useParams,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  WrapperList,
  MainTitle,
  Button,
  OverviewTitle,
  Overview,
  GenresTitle,
  GenreList,
  GenreListItem,
  Wrapper,
  AddlInformation,
  CastLink,
  ReviewsLink,
} from './MovieDetPage.styled';

const Cast = lazy(() => import('../../Components/Cast/Cast'));
const Reviews = lazy(() => import('../../Components/Reviews/Reviews'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  console.log(navigate);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchById(movieId)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);

  const onGoBack = () => {
    navigate(location.state?.from || '/');
  };

  return (
    movie && (
      <>
        <div>
          <Button type="button" onClick={onGoBack}>
            Go back
          </Button>
          <Wrapper>
            <img
              width="300"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            ></img>
            <WrapperList>
              <MainTitle>
                {`${movie.original_title} (${movie.release_date.slice(0, 4)})`}{' '}
              </MainTitle>
              <p>{`User score: ${movie.vote_average * 10}%`}</p>
              <OverviewTitle>Overview</OverviewTitle>
              <Overview>{movie.overview}</Overview>
              <GenresTitle>Genres</GenresTitle>
              <p>
                <GenreList>
                  {movie.genres.map(genre => (
                    <GenreListItem key={genre.id}>{genre.name}</GenreListItem>
                  ))}
                </GenreList>
              </p>
            </WrapperList>
          </Wrapper>
        </div>
        <div>
          <AddlInformation>Additional information</AddlInformation>
          <CastLink>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </CastLink>
          <ReviewsLink>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </ReviewsLink>
          <Routes>
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="reviews" element={<Reviews movieId={movieId} />} />
          </Routes>
        </div>
      </>
    )
  );
};

export default MovieDetailsPage;
