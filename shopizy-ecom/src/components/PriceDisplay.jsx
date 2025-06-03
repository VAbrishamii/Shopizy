// Desc: PriceContainer component for displaying original and discounted prices
import { useMemo } from "react";
import {
  PriceContainer as StyledPriceContainer,
  OriginalPrice,
  DiscountedPrice,
  DiscounteBadge,
} from "../styles/PriceStyles";
/**
 *
 * PriceDisplay component for displaying product prices with optional discounts.
 * @param {Object} props - Component properties.
 * @param {number} props.price - The original price of the product.
 */
const PriceDisplay = ({ price, discountedPrice }) => {
  const hasDiscount = discountedPrice && discountedPrice < price;

  const discountPercentage = useMemo(() => {
    return hasDiscount
      ? Math.round(((price - discountedPrice) / price) * 100)
      : 0;
  }, [price, discountedPrice, hasDiscount]);

  return (
    <StyledPriceContainer>
      <OriginalPrice $hasDiscount={hasDiscount}>
        ${price.toFixed(2)}
      </OriginalPrice>
      {hasDiscount && (
        <>
          <DiscountedPrice>${discountedPrice.toFixed(2)}</DiscountedPrice>
          <DiscounteBadge>{discountPercentage}%OFF</DiscounteBadge>
        </>
      )}
    </StyledPriceContainer>
  );
};

export default PriceDisplay;
