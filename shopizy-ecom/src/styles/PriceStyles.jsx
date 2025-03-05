import styled from "styled-components";

export const PriceContainer = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  margin-top: 5px;
`;

export const OriginalPrice = styled.span`
  text-decoration: ${({ $hasDiscount }) =>
    $hasDiscount ? "line-through" : "none"};
  color: ${({ $hasDiscount, theme }) => $hasDiscount ? theme.colors.darkGrey: theme.colors.textPrimary};
`;

export const DiscountedPrice = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const DiscounteBadge = styled.span`
  color: ${({ theme }) => theme.colors.error};
  padding: 3px 0px;
  font-size: 0.8rem;
  border-radius: 50%;
  font-weight: bold;
  // background-color: ${({ theme }) => theme.colors.success};
`;

export default PriceContainer;
