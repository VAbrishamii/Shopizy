import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 200px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid ${({ theme }) => theme.colors.secondary || "#ccc"};
  border-top: 5px solid ${({ theme }) => theme.colors.primary || "#6A0DAD"};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
`;

export const LoadingText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary || "#333"};
`;