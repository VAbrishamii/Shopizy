import { Link } from "react-router-dom";
import PriceDisplay from "./PriceDisplay";
import useCartStore from "../store/useCartStore";

import {
  CardContainer,
  ProductImage,
  ProductImageWrapper,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  AddToCartIcon
} from "../styles/CardStyles";
import RatingStars from "./RatingStars";

const ProductCard = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart);


  return (
    <CardContainer>
        <AddToCartIcon onClick={() => addToCart(product)} />
      <ProductImageWrapper>
        <ProductImage src={product.image.url} alt={product.title} />
      </ProductImageWrapper>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <PriceDisplay
          price={product.price}
          discountedPrice={product.discountedPrice}
        />
        <RatingStars rating={product.rating} />
        <Link to={`/product/${product.id}`}>More</Link>
      </ProductInfo>
    </CardContainer>
  );
};

export default ProductCard;
