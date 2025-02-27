import {ReviewContainer, ReviewTitle, ReviewText, ReviewItem, NoReviews} from '../styles/ReviewStyles';
import RatingStars from './RatingStars';

const ProductReview = ({ reviews }) => {
    console.log("Reviews received in ProductReview:", reviews);
   
    return (
        <ReviewContainer>
       <ReviewTitle>Customer Reviews</ReviewTitle>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
        <ReviewItem key={index}>
          <ReviewerName>{review.Username || "Anonymous"}</ReviewerName>
          <ReviewText>{review.description || "No review text provided."}</ReviewText>
        <RatingStars rating={review.rating} />
        </ReviewItem>
      )) 
    ) : (
        <NoReviews>No reviews yet</NoReviews>
        )}
        </ReviewContainer>

    );
    };
    export default ProductReview;