import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #333;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 500;


`;

export const FooterText = styled.p`
  font-size: 14px;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;

    // &:hover {
    //   text-decoration: underline;
    // }
  }
`;
