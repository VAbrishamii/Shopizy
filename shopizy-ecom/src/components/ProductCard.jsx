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
      console.error ('cartIconref is null');
      return ;
    } 

    const ProductImage = e.target.closest("div").getBoundingClientRect();
    const cartIcon = cartIconRef.current.getBoundingClientRect(); 

   
  
    setFloatingImage({
      src: product.image.url,
      startX: ProductImage.left + ProductImage.width / 2, // Center horizontally
      startY: ProductImage.top + ProductImage.height / 2, // Center vertically
      endX: cartIcon.left + cartIcon.width / 2, // Move towards center of bag
      endY: cartIcon.top + cartIcon.height / 2,
      visible: true,  
    });
    setTimeout(() => {
      setFloatingImage((prev) => ({ ...prev, visible: false })); // ✅ Start fade out
      
    }, 800);

    setTimeout(() => {
      setFloatingImage(null);
      addToCart(product); // ✅ Now add the product to the cart
      console.log('addToCart:', product);
    }, 1000);
   
  };

  return (
    <>
    <CardContainer>
        <AddToCartIcon onClick={handelAddToCart}
        isInCart={isInCart} 
        />
      <ProductImageWrapper>
        <ProductImage src={product.image.url} alt={`Image of ${product.image.alt}`} />
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
          startX={floatingImage.startX}
          startY={floatingImage.startY}
          endX={floatingImage.endX}
          endY={floatingImage.endY}
          visible={floatingImage.visible}
         
    
        />
      )}
   
    </>
  );
};

export default ProductCard;
