import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 100px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) =>
    theme.colors.background === "#121212"
      ? "0 4px 10px rgba(255, 255, 255, 0.1)"
      : "0 4px 6px rgba(0, 0, 0, 0.1)"};
  transition: box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export const TopHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
  border-radius: 50%;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const IconLink = styled(Link)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    transform: scale(1.1);
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; 
    font-weight: bold;
    transform: scale(1.1); 
  }

  &:focus {
    outline: none; // Remove focus outline
    box-shadow: none; // Prevent background color from appearing
  }
`;
export const MobileNav = styled.div`
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  z-index: 1001;
  a {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.textPrimary}; 
    text-decoration: none;
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary}; 
      transform: scale(1.1);
    }
  }

`;