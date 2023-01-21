import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("images/intro_image.jpg");
  background-size: cover;
  min-height: 600px;
`;

const ImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageText = styled.div`
  height: auto;
  color: white;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-size: 30px;

  @media (max-width: 650px) {
    font-size: 25px;
  }

  @media (max-width: 500px) {
    font-size: 22px;
  }

  @media (max-width: 417px) {
    font-size: 20px;
  }

  @media (max-width: 356px) {
    font-size: 18px;
  }
`;

const StartButton = styled.button`
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: white;
  padding: 5px 8px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  cursor: pointer;
  transition: opacity 500ms ease-out;
  font-weight: 500;

  @media (max-width: 417px) {
    font-size: 15px;
  }

  :hover {
    opacity: 0.8;
  }
`;

const TextSpan = styled.span`
  color: black;
  font-weight: 500;

  @media (max-width: 700px) {
    color: white;
  }
`;

const MusicInfo = () => {
  return (
    <ImageContainer>
      <ImageTextContainer>
        <ImageText>
          Start your Musical <TextSpan>Journey Today!</TextSpan>
        </ImageText>
        <StartButton
          onClick={() => {
            const el = document.getElementById("products");
            el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          SHOP NOW
        </StartButton>
      </ImageTextContainer>
    </ImageContainer>
  );
};

export default MusicInfo;
