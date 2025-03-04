import styled from "styled-components";

export const WishListContainer = styled.button`
  position: absolute;
  top: 0px;
  left: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${({ isActive, theme }) => (isActive ? "red" : theme.colors.textSecondary)};
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  z-index: 10;

  &:hover {
    color: ${({ theme }) => theme.colors.error};
    transform: scale(1.1);
    }

`;