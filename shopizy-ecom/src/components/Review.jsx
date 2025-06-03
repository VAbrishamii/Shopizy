import {
  ReviewContainer,
  ReviewTitle,
  ReviewerName,
  ReviewText,
  ReviewItem,
  NoReviews,
} from "../styles/ReviewStyles";
import RatingStars from "./RatingStars";
/**
 *
 * ProductReview component for displaying customer reviews of a product.
 * @param {Object} props - Component properties.
 * @param {Array} props.reviews - Array of review objects containing review details.
 */
const ProductReview = ({ reviews }) => {
  return (
    <ReviewContainer>
      <ReviewTitle>Customer Reviews</ReviewTitle>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewItem key={review.id || index}>
            <ReviewerName>{review?.username || "Anonymous"}</ReviewerName>
            <ReviewText>
              {review?.description || "No review text provided."}
            </ReviewText>
            <RatingStars rating={review?.rating || 0} />
          </ReviewItem>
        ))
      ) : (
        <NoReviews>No reviews yet</NoReviews>
      )}
    </ReviewContainer>
  );
};
export default ProductReview;
