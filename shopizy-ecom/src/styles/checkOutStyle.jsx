import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  text-align: center;
  background: ${({ theme }) => theme.colors.background || "#f5f5f5"};
  padding: 20px;
`;

export const CheckoutContent = styled.div`
  // background-color: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  // max-width: 500px;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.success};
  margin-bottom: 0.5rem;
`;

export const Message = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.success || "#28a745"};
  margin-bottom: 20px;

`;
export const PurchasedItemsContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  text-align: left;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
  color: ${({ theme }) => theme.textPrimary};

  &:last-child {
    border-bottom: none;
  }
    div {
    display: flex;
    align-items: center;
    gap: 10px; /* This adds spacing between the image and title */
  }

  img {
    border-radius: 5px;
    width: 50px;
    height: 50px;
    object-fit: cover;
  }  
`;
export const BackButton = styled(Link)`
  padding: 12px 24px;
  font-size: 18px;
  // background-color: ${({ theme }) => theme.colors.secondary };
  color: ${({ theme }) => theme.colors.secondary };;
  // border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  // box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary };
    transform: scale(1.05);
  }
`;
