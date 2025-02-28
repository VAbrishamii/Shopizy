import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: ${({ theme }) => theme.colors.background || "#f5f5f5"};
  padding: 20px;
`;

export const Message = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.success || "#28a745"};
  margin-bottom: 20px;

`;

export const BackButton = styled(Link)`
  padding: 12px 24px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.secondary };
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary };
    transform: scale(1.05);
  }
`;
