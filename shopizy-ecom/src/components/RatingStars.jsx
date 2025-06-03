import { StarsContainer, StarIcon } from "../styles/StarsStyles";
/**
 *
 * RatingStars component for displaying a rating as stars.
 * @param {Object} props - Component properties.
 * @param {number} props.rating - The rating value (1 to 5).
 */

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  return (
    <StarsContainer>
      {Array.from({ length: totalStars }, (_, index) => (
        <StarIcon key={index} $filled={index < rating} />
      ))}
    </StarsContainer>
  );
};

export default RatingStars;
