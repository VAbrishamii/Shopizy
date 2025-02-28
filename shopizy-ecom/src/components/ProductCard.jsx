// Desc: Product card component
import PriceDisplay from "./PriceDisplay";
import useCartStore from "../store/useCartStore";
import { useState } from "react";
import {
  CardContainer,
  ProductImage,
  ProductImageWrapper,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  AddToCartIcon,
  ProductPageLink,
  FloatingImage,
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

  const [floatingImage, setFloatingImage] = useState(null);

  const handelAddToCart = (e) => {
    if (!cartIconRef?.current) {
      console.error("cartIconref is null");
      return;
    }


    const bagIcon = e.target.closest('.bag-icon').getBoundingClientRect();
    const cartIcon = cartIconRef.current.getBoundingClientRect();
  

    setFloatingImage({
      src: product.image.url,
      startX: bagIcon , 
      startY: bagIcon, 
      endX: cartIcon, 
      endY: cartIcon ,
      visible: true,
    });
    setTimeout(() => {
      setFloatingImage((prev) => ({ ...prev, visible: false })); 
    }, 800);

    setTimeout(() => {
      setFloatingImage(null);
      addToCart(product); 
      console.log("addToCart:", product);
    }, 1000);
  };

  return (
    <>
      <CardContainer>
        <AddToCartIcon onClick={handelAddToCart} isInCart={isInCart} className='bag-icon'/>
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
      </CardContainer>
      {/* Floating Image Animation */}
      {floatingImage && (
        <FloatingImage
          src={floatingImage.src}
          $visible={floatingImage.visible}
          style={{
            left: `${floatingImage.startX}px`,
            top: `${floatingImage.startY}px`,
            transform: `translate(${
              floatingImage.endX - floatingImage.startX
            }px, 
                  ${floatingImage.endY - floatingImage.startY}px) scale(0.3)`,
          }}
        />
      )}
    </>
  );
};

export default ProductCard;
