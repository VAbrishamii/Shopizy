import styled from "styled-components";

export const ReviewContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const ReviewTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ReviewItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 10px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const ReviewerName = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ReviewText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const NoReviews = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;