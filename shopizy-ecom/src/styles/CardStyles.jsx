import styled from "styled-components";
import { ShoppingBagIcon} from "@heroicons/react/24/outline";

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;  
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto; 
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  // border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  transition: transform 0.3s;
  width: 250px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AddToCartIcon = styled(ShoppingBagIcon)`
position: absolute;
top: 10px;
right: 10px;
cursor: pointer;
color: ${({ theme }) => theme.colors.black};
transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
width: 22px;
height: 22px;
z-index: 10;
&:hover {
  color: ${({ theme }) => theme.colors.primary};
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
  object-position: top;
  transition: transform 0.3s;
`;

export const ProductInfo = styled.div`
  padding: 10px;
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
`;