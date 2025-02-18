// Desc: PriceContainer component for displaying original and discounted prices 
import { PriceContainer as StyledPriceContainer, OriginalPrice, DiscountedPrice } from "../styles/PriceStyles";

const PriceDisplay = ({ price, discountedPrice }) => {
    const hasDiscount = discountedPrice && discountedPrice < price;
    return (
        <StyledPriceContainer>
            <OriginalPrice $hasDiscount={hasDiscount}>${price.toFixed(2)}</OriginalPrice>
      {hasDiscount && <DiscountedPrice>${discountedPrice.toFixed(2)}</DiscountedPrice>}
    </StyledPriceContainer>
    );
};

export default PriceDisplay;