import PriceDisplay from "./PriceDisplay";
import useCartStore from "../store/useCartStore";
import RatingStars from "./RatingStars";
import WishList from "./WishList";

import {
  CardContainer,
  ProductImage,
  ProductImageWrapper,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  AddToCartIcon,
  ProductPageLink,
  ShoppingBagIconStyled,
} from "../styles/CardStyles";

const ProductCard = ({ product, cartIconRef }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart) || [];
  const isInCart = cart.some((item) => item.id === product?.id);

  const handleAddToCart = () => {
    if (!product) {
      console.error("ProductCard Error: Product data is missing.");
      return;
    }

    if (!cartIconRef?.current) {
      console.error("ProductCard Error: cartIconRef is missing.");
      return;
    }

    if (isInCart) {
      console.info(`"${product.title}" is already in your cart.`);
      return;
    }

    addToCart(product);
  };

  if (!product) {
    console.error("ProductCard Error: No product provided.");
    return null;
  }

  return (
    <>
      <CardContainer>
        <AddToCartIcon
          onClick={handleAddToCart}
          isInCart={isInCart}
          aria-label={isInCart ? "Remove from cart" : "Add to cart"}>
          <ShoppingBagIconStyled />
        </AddToCartIcon>

        <ProductImageWrapper>
          <WishList product={product} />

          <ProductImage
            src={product.image.url}
            alt={`${product.image.alt}`}
            loading="lazy"
          />
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
    </>
  );
};

export default ProductCard;
