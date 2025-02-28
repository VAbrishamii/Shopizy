import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));  // ✅ Responsive grid
  gap: 20px;
  justify-content: center;  // ✅ Ensures cards stay centered
  align-items: start;  // ✅ Aligns all cards properly
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
  width: 100%;  // ✅ Makes sure all cards take equal width
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 400px;  // ✅ Fixing all cards to have the same height
  height: 100%;  // ✅ Stretch cards to fit content evenly

  &:hover {
    transform: scale(1.05);
  }
`;
// export const ProductListContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;
//   align-items: stretch;
//   padding: 20px;
//   max-width: 1200px;
//   margin: 0 auto;
 
// `;

// export const CardContainer = styled.div`
//   background-color: ${({ theme }) => theme.colors.card};
//   // border: 1px solid ${({ theme }) => theme.colors.lightGrey};
//   border-radius: 8px;
//   box-shadow: ${({ theme }) => theme.boxShadow};
//   overflow: hidden;
//   transition: transform 0.3s;
//   width: 250px;
//   text-align: center;
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   min-height: 400px;
//   height: 100%;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

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
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
    @media (min-aspect-ratio: 1/1) {
    object-position: center center; /* Center images that are wider */
  }

  @media (max-aspect-ratio: 1/1) {
    object-position: top center; /* Show top area for taller images */
  }
 
  transition: transform 0.3s;
`;
export const ProductInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;  // ✅ Ensures the card fills all available space
  justify-content: space-between;  // ✅ Pushes content to fill the card evenly
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
  flex-grow: 1; // ✅ Pushes "More" button to the bottom
`;

export const ProductPageLink = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  align-self: flex-end;  // ✅ Forces it to stay at the bottom
  margin-top: auto;  // ✅ Ensures button stays at the bottom
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
    opacity: 1,  // Set default opacity in style
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
