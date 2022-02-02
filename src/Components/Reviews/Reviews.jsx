import { useState, useEffect } from 'react';
import { FetchFilmsReviews } from '../../Servises/FetchApi';
import { ReviewsList } from './Reviews.styled';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    FetchFilmsReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ReviewsList>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ReviewsList>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
