import styled from "styled-components";

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
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  width: 250px;
  text-align: center;
  cursor: pointer;
  display: flex;
    flex-direction: column;
    align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
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