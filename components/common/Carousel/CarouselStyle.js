import styled from "styled-components";

export const CarouselContainer = styled.div`
  overflow: hidden;
`;

export const CarouselItems = styled.div`
  list-style: none;
  white-space: nowrap;
`;

export const CarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 150px;
  left: ${(props) => props.leftPos};
  right: ${(props) => props.rightPos};
  border: none;
  color: grey;
  background: none;
  font-size: 30px;

  :hover {
    outline: 1px solid black;
  }
`;
