import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));  
  gap: 20px;
  justify-content: center;  
  align-items: start;  
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  transition: transform 0.3s;
  width: 100%; 
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 400px;  
  height: 100%; 

  &:hover {
    transform: scale(1.05);
  }
`;


export const AddToCartIcon = styled(({ isInCart, ...props }) => (
  <ShoppingBagIcon {...props} />
))`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  width: 22px;
  height: 22px;
  z-index: 10;

  color: ${({ isInCart, theme }) => (isInCart ? theme.colors.error : theme.colors.black)};

  &:hover {
    color: ${({ theme }) => theme.colors.error};
    transform: scale(1.1);
  }
`;


export const ProductImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;  /* Ensures consistent aspect ratio */
  // height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background}; /* Adds a fallback background */
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  // object-fit: cover;
  object-fit: contain; /* Keeps the full image visible without cropping */
  //   @media (min-aspect-ratio: 1/1) {
  //   object-position: center center; /* Center images that are wider */
  // }

  // @media (max-aspect-ratio: 1/1) {
  //   object-position: top center; /* Show top area for taller images */
  // }
   @media (min-width: 768px) {
    object-fit: cover; /* Adjust for larger screens */
  }

  &:hover {
    transform: scale(1.05);
  }
 
  transition: transform 0.3s;
`;
export const ProductInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;  
  justify-content: space-between;  
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 5px;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 5px;
  flex-grow: 1; 
`;

export const ProductPageLink = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  align-self: flex-end; 
  margin-top: auto;  
  display: block;
  text-align: right;
  width: 100%;
  padding: 5px 10px;

  &:hover {
    text-decoration: underline;
  }
`;


export const FloatingImage = styled.img.attrs(({ startX, startY, endX, endY }) => ({
  style: {
    left: `${startX}px`,
    top: `${startY}px`,
    transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0.3)`,
    opacity: 1, 
  },
}))`
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  pointer-events: none;
  z-index: 9999;
  transition: 
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.6s ease-in-out;

  ${({ $visible }) => !$visible && "opacity: 0;"} /* ✅ Only apply opacity via CSS */
`;
