// Desc: Product card component
import { motion, useAnimation } from "framer-motion";
import PriceDisplay from "./PriceDisplay";
import useCartStore from "../store/useCartStore";
import { useRef, useState } from "react";
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
  if (!product) {
    console.error("ProductCard: ", product);
    return null;
  }

  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart) || [];
  const isInCart = cart.some((item) => item.id === product.id);
  const [showFloating, setShowFloating] = useState(false);
  const [floatingPosition, setFloatingPosition] = useState();

  const controls = useAnimation();
  const floatingRef = useRef(null);

  const handelAddToCart = async (e) => {
    if (!cartIconRef?.current) {
      console.error("cartIconRef is null");
      return;
    }

    const bagIcon = e.currentTarget.getBoundingClientRect();
    const cartIcon = cartIconRef.current.getBoundingClientRect();
    const isCartFixed =
      window.getComputedStyle(cartIconRef.current).position === "fixed";

    setFloatingPosition({
      start: {
        x: bagIcon.left + bagIcon.width / 2,
        y: bagIcon.top + bagIcon.height / 2 + window.scrollY,
      },
      end: {
        x:
          cartIcon.left +
          cartIcon.width / 2 +
          (isCartFixed ? 0 : window.scrollX),
        y:
          cartIcon.top +
          cartIcon.height / 2 +
          (isCartFixed ? 0 : window.scrollY),
      },
    });
    setShowFloating(true);
    await controls.start({
      x: cartIcon.left - bagIcon.left,
      y: cartIcon.top - bagIcon.top,
      scale: 0.3,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    });
    setTimeout(() => {
      setShowFloating(false);
      addToCart(product);
    }, 1000);
  };

  return (
    <>
      <CardContainer>
        {/* <WishList product={product} /> */}
        {/* <AddToCartIcon
          onClick={handelAddToCart}
          isInCart={isInCart}
          className="bag-icon"
        /> */}

        <AddToCartIcon onClick={handelAddToCart} isInCart={isInCart}>
          <ShoppingBagIconStyled  />
        </AddToCartIcon>

        <ProductImageWrapper>
          <WishList product={product} />
          <ProductImage
            src={product.image.url}
            alt={`Image of ${product.image.alt}`}
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

        {showFloating && floatingPosition.start && floatingPosition.end && (
          <motion.img
            ref={floatingRef}
            src={product.image.url}
            alt=""
            initial={{
              opacity: 1,
              scale: 1,
              left: `${floatingPosition.start.x}px`,
              top: `${floatingPosition.start.y}px`,
            }}
            animate={{
              left: `${floatingPosition.end.x}px`,
              top: `${floatingPosition.end.y}px`,
              scale: 0.3,
              opacity: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            style={{
              position: "fixed",
              width: "50px",
              height: "50px",
              zIndex: 999,
              pointerEvents: "none",
            }}
          />
        )}
      </CardContainer>
    </>
  );
};

export default ProductCard;
