import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartSummaryContainer = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
  overflow-y: auto;
  max-height: 400px; /* Prevents excessive height */
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CartImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

export const CartDetails = styled.div`
  flex: 1;
  .title {
    font-size: 14px;
    font-weight: bold;
  }
  .price {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    
    };
  
  }
`;
export const TrashButton = styled.button`
  color: ${({ theme }) => theme.colors.error};
}
`;

export const CheckoutButton = styled(Link)`
  display: block;
  text-align: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
