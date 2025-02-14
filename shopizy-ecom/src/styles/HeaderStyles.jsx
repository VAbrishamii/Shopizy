import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const IconLink = styled(Link)`
  font-size: 22px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff9800;
  }
`;
