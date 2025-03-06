import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;

`;

export const CheckoutContent = styled.div`
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin: 50px auto;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
`;

export const Message = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
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
  color: ${({ theme }) => theme.colors.secondary };;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    transform: scale(1.05);
  }
`;


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  margin: 0 10px;

 

`;
export const Label = styled.label`
  font-size: 12px;
  margin: 5px;

  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
`;


export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 10px;
`;

export const PayButton = styled.button`
  padding: 12px;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;