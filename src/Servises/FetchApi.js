const key = '0acbef793912116e8168b05c9b24e1e7';
const baseURL = `https://api.themoviedb.org/3`;

const onFetch = response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error();
};

export function fetchTrending() {
  return fetch(`${baseURL}/trending/movie/day?api_key=${key}`).then(response =>
    onFetch(response),
  );
}

export function fetchMovie(keyWord) {
  return fetch(`${baseURL}/search/movie?api_key=${key}&query=${keyWord}`).then(
    response => onFetch(response),
  );
}

export function fetchById(movie_id) {
  return fetch(`${baseURL}/movie/${movie_id}?api_key=${key}`).then(response =>
    onFetch(response),
  );
}

export function FetchFilmsCredits(movie_id) {
  return fetch(`${baseURL}/movie/${movie_id}/credits?api_key=${key}`).then(
    response => onFetch(response),
  );
}

export function FetchFilmsReviews(movie_id) {
  return fetch(`${baseURL}/movie/${movie_id}/reviews?api_key=${key}`).then(
    response => onFetch(response),
  );
}
