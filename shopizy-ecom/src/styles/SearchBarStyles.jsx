import styled from "styled-components";
import { Search } from "lucide-react";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  max-width: 600px;
  margin: 20px auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
 
 
 
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};

 
`;

export const SearchIcon = styled(Search)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    transform: scale(1.1);
  }
`;
