import React, { useEffect, useState } from 'react';
import { getReviewsByRestaurant, addReview } from '../services/ReviewService';

const ReviewList =({ restaurantId })=> {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getReviewsByRestaurant(restaurantId);
      setReviews(data);
    };
    fetchReviews();
  }, [restaurantId]);

  const handleAddReview = async () => {
    await addReview({ content: newReview, restaurant: restaurantId });
    const data = await getReviewsByRestaurant(restaurantId);
    setReviews(data);
    setNewReview('');
  };

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>{review.content}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write a review"
      />
      <button onClick={handleAddReview}>Add Review</button>
    </div>
  );
}

export default ReviewList;
