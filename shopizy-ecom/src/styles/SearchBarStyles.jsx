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
  border-radius: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
    @media (max-width: 768px) {
    width: 80%;
 
 
 
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
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  padding: 5px;

  &:hover {
    font-weight: bold;
    transform: scale(1.1);
  }

`;

export const ResultsContainer = styled.div`
    position: absolute;
    width: 93%;
    top: 100%;
    left: 20px;
    max-height: 250px;
    background-color: ${({ theme }) => theme.colors.card};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow-y: auto;
    z-index: 1000;
    padding: 10px;
    @media (max-width: 768px) {
    max-width: 280px;
`;


export const ResultItem = styled.div`
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme }) => theme.textPrimary};
    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
  
    &:hover {
 background-color: ${({ theme }) => theme.colors.primary}; /* ✅ Highlight color */
        color: ${({ theme }) => theme.colors.white}; /* ✅ Text color change */
        transform: scale(1.02);
        border-radius: 5px;
    }
`;
