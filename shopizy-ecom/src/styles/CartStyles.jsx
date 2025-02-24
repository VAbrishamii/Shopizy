import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSecondary};
  padding: 10px 0;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 5px;
  }
`;

export const CartDetails = styled.div`
  flex-grow: 1;
  padding: 0 15px;

  h3 {
    font-size: 16px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const QuantityInput = styled.input`
  width: 50px;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 5px;
`;

export const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme.colors.error};
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CartTotal = styled.div`
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
