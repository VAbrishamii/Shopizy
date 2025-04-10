import { StarsContainer, StarIcon } from "../styles/StarsStyles";

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
