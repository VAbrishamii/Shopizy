// Desc: Product card component
import { motion, useAnimation } from "framer-motion";
import PriceDisplay from "./PriceDisplay";
import useCartStore from "../store/useCartStore";
import { useRef, useState } from "react";
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

const ProductCard = ({ product, cartIconRef }) => {
  if (!product) {
    console.error("ProductCard: ", product);
    return null;
  }
  // console.log('product in ProductCard:', product);
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart) || [];
  const isInCart = cart.some((item) => item.id === product.id);
  const [showFloating, setShowFloating] = useState(false);
  const [bagIconPos, setBagIconPos] = useState(null);
  const [cartIconPos, setCartIconPos] = useState(null);

  const controls = useAnimation();
  const floatingRef = useRef(null);

  const handelAddToCart = async (e) => {
    if (!cartIconRef?.current) {
      console.error("cartIconRef is null");
      return;
    }

    const bagIcon = e.currentTarget.getBoundingClientRect();
    const cartIcon = cartIconRef.current.getBoundingClientRect();
    console.log('bagIcon:', bagIcon);
    console.log('cartIcon:', cartIcon);
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const isCartFixed = window.getComputedStyle(cartIconRef.current).position === "fixed";

    setBagIconPos({
      x: bagIcon.left + bagIcon.width / 2, // Center of bag icon
      y: bagIcon.top + bagIcon.height / 2 + scrollY, // Center of bag icon
    });
    setCartIconPos({
      x: cartIcon.left + cartIcon.width / 2 + (isCartFixed ? 0 : scrollX), // Center of cart icon
      y: cartIcon.top + cartIcon.height / 2 + (isCartFixed ? 0 : scrollY), // Center of cart icon
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
        <AddToCartIcon
          onClick={handelAddToCart}
          isInCart={isInCart}
          className="bag-icon"
        />
        <ProductImageWrapper>
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

        {showFloating && (
          <motion.img
            ref={floatingRef}
            src={product.image.url}
            alt=""
            initial={{
              opacity: 1,
              scale: 1,
              left: `${bagIconPos.x}px`,
              top: `${bagIconPos.y}px`,
            }}
            animate={{
              left: `${cartIconPos.x}px`,
              top: `${cartIconPos.y}px`,
              scale: 0.3,
              opacity: 0,
              transition: { duration: 2, ease: "easeOut" },
            }}
            style={{
              position: "absolute",
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
