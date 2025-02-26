import styled from "styled-components";

export const PriceContainer = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 5px;
  // align-items: center;
  
`;

export const OriginalPrice = styled.span`
  text-decoration: ${({ $hasDiscount }) => ($hasDiscount ? "line-through" : "none")}; 
  color: ${({ $hasDiscount, theme }) => theme.colors.textPrimary}; 
`;
  

export const DiscountedPrice = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;


export default PriceContainer;
