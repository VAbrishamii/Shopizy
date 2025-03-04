import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 4px;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 4px;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: -10px 0 10px;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 20px 20px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  z-index: 1000;
  font-size: 20px;
  opacity: 1;
  animation: fadeOut 5s ease-in-out;

  @keyframes fadeOut {
    0% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

export const PopupMessage = styled.p`
  white-space: pre-line;
  line-height: 1.5;
  word-wrap: break-word;
  font-size: 20px;
  margin: 0;
  text-align: center;
`;
