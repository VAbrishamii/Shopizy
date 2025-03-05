import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px;
  p{
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: 20px;
  }
    h2{
    text-align: center;
    }
 
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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15px;

`;

export const CartActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;


export const QuantityWrapeper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 16px;
    padding: 5px 10px;
    border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    border-radius: 5px;
    font-weight: bold;
  }
   button{
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    transition: transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.2);
    }
   } 
`;
export const RemoveButton = styled.button`
  color: ${({ theme }) => theme.colors.error};
  background: none;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width:40px;
  height:40px;
  border-radius:8px;
  transition: background 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;


export const SummaryContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
  border-top: 2px solid #ddd;

  .summary-row {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 8px 0;
  }

  .total {
    font-weight: bold;
    font-size: 18px;
  }

  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 10px 0;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;