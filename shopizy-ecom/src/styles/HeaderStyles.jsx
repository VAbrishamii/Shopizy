import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 100px;
  background-color:${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap:  ${({ theme }) => theme.spacing.medium};
`;

export const IconLink = styled(Link)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
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


  
  }
`;
