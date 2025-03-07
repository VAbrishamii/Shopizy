import styled from "styled-components";

export const WishListContainer = styled.button`
  all: unset;
  position: absolute;
  top: 5px;
  left: 5px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  text-align: center;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  background:rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
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
  justify-content: center;
  width: 100%;
  margin: 20px auto;
  padding: 20px;
 
`;

export const WishlistList = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 800px;
  padding: 0;
`;


export const WishlistItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSecondary};
`;

export const WishlistImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

// 

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
