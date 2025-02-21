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
  position: relative;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  .cart-icon {
    width: 28px;
    height: 28px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    transform: scale(1.1);
  }
`;
export const CartWrapper = styled.div`
  position: relative; 
  display: inline-block;
`;
export const CartBadge = styled.span.withConfig({shouldForwardProp: (prop) => prop !== "isMobile" && prop !== "isTablet"})`
  position: absolute;
  top: 6px;
  right: 2px;
  transform: translate(50%, -50%);
  // top: ${({ isMobile = false, isTablet = false }) => (isMobile ? "10px" : isTablet ? "-1px" : "-1px")};
  // right: ${({ isMobile = false, isTablet = false }) => (isMobile ? "267px" : isTablet ? "-6px" : "-6px")};
  color: white;
  background-color: ${({ theme }) => theme.colors.error};  
  font-size: 12px;
  font-weight: bold;
  padding: 3px 3px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // min-width: 20px;
  // min-height: 20px;
  min-width: ${({ isMobile }) => (isMobile ? "20px" : "15px")};
  min-height: ${({ isMobile }) => (isMobile ? "20px" : "15px")};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;


 
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
export const ToggleSwitch = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDark"})`

  width: 40px;
  height: 20px;
  background-color: ${({ isDark, theme }) => 
    isDark ? theme.colors.primary : "#ccc"};
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px;
  transition: background-color 0.3s;
`;


export const ToggleSlider = styled.div.withConfig({shouldForwardProp: (prop) => prop !== "isDark"})`
  height: 18px;
  width: 18px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: ${({ isDark }) => (isDark ? "20px" : "2px")};
  transition: left 0.3s;
`;

export const MobileNav = styled.div`
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) =>
    theme.colors.background === "#121212"
      ? "0 -4px 10px rgba(255, 255, 255, 0.1)"
      : "0 -4px 6px rgba(0, 0, 0, 0.1)"}; 
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  z-index: 1001;
 
  &:hover {
    color: ${({ theme }) => theme.colors.primary}; 
    transform: scale(1.1);
  }
  

`;