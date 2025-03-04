import styled from "styled-components";

export const WishListContainer = styled.button`
  position: absolute;
  top: 0px;
  left: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${({ isActive }) => (isActive ? "red" : "black")};
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 10;

  &:hover {
    color: red;
    transform: scale(1.1);
  }
`;
export const WishListContainerwrappper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px auto;
  padding: 20px;
`;

export const WishlistList = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  gap: 20px;
 
`;

export const WishlistItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  transition: transform 0.3s;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSecondary};
  &:hover {
    transform: scale(1.05);
  }
`;

export const WishlistImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
  flex-shrink: 0;
`;

export const WishlistInfo = styled.div`
  flow-grow: 1;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 10px;
  padding-left: 10px;

  span {
    display: flex;
    align-items: left;
    justify-content: space-between;
    width: 100%;
  }

  h1{
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  p {
    font-size: 16px;
    width: 100%;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
  }
`;

export const WishlistActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: flex-end;
  min-width: 100px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    display: flex;
    align-items: center;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 20px;
`;
