import styled from "styled-components";
import React from "react";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 40px;
  width: 100%;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  color: white;
`;
const Footer = () => {
  return <FooterContainer>Copyright @ Truly Accoustic 2023</FooterContainer>;
};

export default Footer;
