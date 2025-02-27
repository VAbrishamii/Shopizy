// Desc: Product card component
import PriceDisplay from "./PriceDisplay";
import useCartStore from "../store/useCartStore";

import {
  CardContainer,
  ProductImage,
  ProductImageWrapper,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  AddToCartIcon,
  ProductPageLink,
} from "../styles/CardStyles";
import RatingStars from "./RatingStars";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart) || [];
  const isInCart = cart.some((item) => item.id === product.id);


  return (
    <CardContainer>
        <AddToCartIcon onClick={() => addToCart(product)}
        isInCart={isInCart} 
        />
      <ProductImageWrapper>
        <ProductImage src={product.image.url} alt={`Image of ${product.title}`} />
      </ProductImageWrapper>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <PriceDisplay
          price={product.price}
          discountedPrice={product.discountedPrice}
        />
        <RatingStars rating={product.rating} />
        <ProductPageLink to={`/product/${product.id}`}>More</ProductPageLink>
      </ProductInfo>
    </CardContainer>
  );
};

export default ProductCard;
