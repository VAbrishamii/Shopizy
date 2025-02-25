import styled from "styled-components";

export const CartSummaryContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 300px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 100;
  transition: all 0.3s ease-in-out;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
