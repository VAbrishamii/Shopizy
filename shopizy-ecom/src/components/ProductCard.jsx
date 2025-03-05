import PriceDisplay from "./PriceDisplay";
import useCartStore from "../store/useCartStore";
import {  useRef } from "react";
import RatingStars from "./RatingStars";
import WishList from "./WishList";
import FlyToCart from "./FlyToCart";
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
  if (!product) {
    console.error("ProductCard: ", product);
    return null;
  }

  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart) || [];
  const isInCart = cart.some((item) => item.id === product.id);
 

  const triggerRef = useRef(null); 
  const flyToCartRef = useRef(null);

  const handelAddToCart = async (e) => {
    if (!cartIconRef?.current) {
      console.error("cartIconRef is null");
      return;
    }

    flyToCartRef.current.startAnimation();

    setTimeout(() => {
      console.log("Adding product to cart...");
      addToCart(product);
    }, 1500);
  };

    

  return (
    <>
      <CardContainer>
        <AddToCartIcon  ref={triggerRef} onClick={handelAddToCart} isInCart={isInCart}>
          <ShoppingBagIconStyled  />
        </AddToCartIcon>

        <ProductImageWrapper>
          <WishList product={product} />
          
          <ProductImage
            src={product.image.url}
            alt={`Image of ${product.image.alt}`}
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

        {/* Floating Image Animation */}
        <FlyToCart ref={flyToCartRef} triggerRef={triggerRef} targetRef={cartIconRef} imageSrc={product.image.url} />
      </CardContainer>
    </>
  );
};

export default ProductCard;
