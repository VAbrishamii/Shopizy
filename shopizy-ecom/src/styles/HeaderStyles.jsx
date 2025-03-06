import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
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
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    transform: scale(1.1) rotate(5deg); /* Slight rotation & scale */
  }
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
export const CartBadge = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isMobile" && prop !== "isTablet",
})`
  position: absolute;
  top: 6px;
  right: 2px;
  transform: translate(50%, -50%);
  // top: ${({ isMobile = false, isTablet = false }) =>
    isMobile ? "10px" : isTablet ? "-1px" : "-1px"};
  // right: ${({ isMobile = false, isTablet = false }) =>
    isMobile ? "267px" : isTablet ? "-6px" : "-6px"};
  color: white;
  background-color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  font-weight: bold;
  padding: 3px 3px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
  // min-width: ${({ isMobile }) => (isMobile ? "20px" : "20px")};
  // min-height: ${({ isMobile }) => (isMobile ? "20px" : "20px")};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;
export const CartSummary = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 250px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${CartWrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }

  .cart-item {
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.textSecondary};
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .cart-item img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 5px;
  }

  .cart-details {
    flex-grow: 1;
    font-size: 14px;
  }

  .cart-actions {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .cart-actions button {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 3px 7px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }

  a {
    display: block;
    text-align: center;
    background: ${({ theme }) => theme.colors.success};
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
export const CheckoutButton = styled(Link)`
  display: block;
  text-align: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
`;

export const CartDropdown = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isMobile",
})`
  position: absolute;
  top: 60px;
  right: ${({ isMobile }) => (isMobile ? "-50px" : "0")};
  width: ${({ isMobile }) => (isMobile ? "100vw" : "300px")};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;

  .total {
    text-align: right;
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }

  h3 {
    font-size: 14px;
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const CartActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    padding: 4px;
    border-radius: 5px;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;
// export const CheckoutButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background: ${({ theme }) => theme.colors.primary};
//   color: white;
//   font-size: 14px;
//   font-weight: bold;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background: ${({ theme }) => theme.colors.secondary};
//   }
// `;
export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;
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
export const ToggleSwitch = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDark",
})`
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

export const ToggleSlider = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDark",
})`
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
